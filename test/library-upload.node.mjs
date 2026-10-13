import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createContext, SourceTextModule, SyntheticModule } from "node:vm";

async function fixture() {
  let complete;
  const context = createContext({ FormData });
  const source = await readFile(new URL("../src/components/partials/LibraryInput.vue", import.meta.url), "utf8");
  const module = new SourceTextModule(source.match(/<script>([\s\S]*?)<\/script>/)[1], { context });
  await module.link((specifier) => new SyntheticModule(["default"], function () {
    this.setExport("default", specifier.includes("Api") ? {
      post(_route, _body, callback) { complete = callback; },
    } : {});
  }, { context }));
  await module.evaluate();
  const component = module.namespace.default;
  const events = [];
  const instance = {
    ...component.data(),
    category: "music",
    show_library: true,
    uploadFile: new File(["audio"], "Louvor.mp3"),
    $store: { getters: { user: { is_admin: true } } },
    $refs: { uploadInput: { value: "Louvor.mp3" } },
    $emit: (...event) => events.push(event),
  };
  for (const [name, method] of Object.entries(component.methods)) instance[name] = method.bind(instance);
  for (const [name, getter] of Object.entries(component.computed)) Object.defineProperty(instance, name, { get: getter.bind(instance) });
  return { instance, events, complete: (...args) => complete(...args), unmount: () => component.beforeUnmount.call(instance) };
}

const uploaded = { id_file: 99, name: "Louvor.mp3", url: "https://files.louvorja.com.br/musics/pt/Avulsas/Louvor.mp3" };

test("selecionar ou remover durante envio não altera o campo nem fecha a biblioteca", async () => {
  const { instance, events, complete } = await fixture();
  instance.upload();
  instance.selectFile({ id_file: 1, url: "outro.mp3" });
  instance.remove();
  assert.equal(instance.uploading, true);
  assert.equal(instance.show_library, true);
  assert.deepEqual(events, []);
  complete(true, { data: uploaded });
  assert.equal(instance.uploading, false);
  assert.equal(instance.show_library, false);
  assert.equal(instance.item, uploaded);
  assert.deepEqual(events, [["input", 99]]);
});

test("resposta depois de sair da tela não toca referências desmontadas nem seleciona arquivo", async () => {
  const { instance, events, complete, unmount } = await fixture();
  instance.upload();
  unmount();
  instance.$refs = {};
  assert.doesNotThrow(() => complete(true, { data: uploaded }));
  assert.deepEqual(events, []);
  assert.equal(instance.item.id_file, undefined);
});

test("mostra os erros por campo antes da mensagem genérica e mantém o arquivo para correção", async () => {
  const { instance, events, complete } = await fixture();
  instance.upload();
  complete(false, { error: "Dados inválidos", messages: { dir: ["Pasta inválida"], file: ["Formato inválido"] } });
  assert.equal(instance.uploadError, "Pasta inválida\nFormato inválido");
  assert.equal(instance.uploading, false);
  assert.equal(instance.show_library, true);
  assert.equal(instance.uploadFile.name, "Louvor.mp3");
  assert.deepEqual(events, []);
});
