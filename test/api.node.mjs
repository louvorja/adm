import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createContext, SourceTextModule, SyntheticModule } from "node:vm";

async function fixture(fetch) {
  const context = createContext({ FormData, URLSearchParams, fetch });
  const module = new SourceTextModule(await readFile(new URL("../src/services/Api.js", import.meta.url), "utf8"), {
    context,
    initializeImportMeta(meta) { meta.env = { VITE_API_URL: "https://api.example.test" }; },
  });
  await module.link(() => new SyntheticModule(["default"], function () {
    this.setExport("default", { get: () => "session-token" });
  }, { context }));
  await module.evaluate();
  return module.namespace.default;
}

test("envia arquivo binário em multipart com autorização e boundary definido pelo navegador", async () => {
  const body = new FormData();
  body.set("file", new Blob([new Uint8Array([0, 255, 17, 42])]), "música.opus");
  body.set("type", "music");
  body.set("id_language", "pt");
  const item = { id_file: 9, url: "https://files.louvorja.com.br/musics/pt/Avulsas/música.opus" };
  const api = await fixture(async (url, options) => {
    assert.equal(url, "https://api.example.test/admin/files");
    assert.equal(options.headers.Authorization, "Bearer session-token");
    assert.equal(options.headers["Content-Type"], undefined);
    assert.equal(options.body, body);
    const request = new Request(url, options);
    assert.match(request.headers.get("content-type"), /^multipart\/form-data; boundary=/);
    const received = await request.formData();
    assert.deepEqual(new Uint8Array(await received.get("file").arrayBuffer()), new Uint8Array([0, 255, 17, 42]));
    return Response.json({ data: item }, { status: 201 });
  });
  let result;
  assert.equal(await api.call("post", "admin/files", null, body, (ok, data) => { result = [ok, data]; }), true);
  assert.deepEqual(result, [true, { data: item }]);
});

test("preserva os pedidos JSON usados para salvar o cadastro", async () => {
  const api = await fixture(async (_url, options) => {
    assert.equal(options.headers["Content-Type"], "application/json");
    assert.equal(options.body, '{"id_file_music":9}');
    return Response.json({ data: { id_music: 1 } });
  });
  assert.equal(await api.call("put", "admin/musics/1", null, { id_file_music: 9 }), true);
});

test("erro HTTP, JSON inválido e falha de rede finalizam o envio uma única vez", async () => {
  for (const respond of [
    () => Response.json({ error: "Já existe um arquivo com esse nome." }, { status: 409 }),
    () => new Response("Payload Too Large", { status: 413 }),
    () => { throw new TypeError("sem conexão"); },
  ]) {
    const calls = [];
    const api = await fixture(respond);
    assert.equal(await api.call("post", "admin/files", null, new FormData(), (ok, data) => calls.push({ ok, data })), false);
    assert.equal(calls.length, 1);
    assert.equal(calls[0].ok, false);
    assert.equal(typeof calls[0].data.error, "string");
  }
});
