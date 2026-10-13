import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createContext, SourceTextModule, SyntheticModule } from "node:vm";

async function authFixture() {
  const state = { auth: true, user: { name: "Admin" }, start: true, loading: false };
  let token = "token-atual";
  const requests = [];
  const navigations = [];
  const storage = {
    get: () => token,
    set: (_key, value) => { token = value; },
    remove: () => { token = ""; },
  };
  const store = {
    commit(name, value) {
      const key = name.slice(3);
      state[key[0].toLowerCase() + key.slice(1)] = value;
    },
  };
  const router = {
    push: async (path) => { navigations.push(["push", path]); },
    replace: async (path) => { navigations.push(["replace", path]); },
  };
  const context = createContext({
    console,
    FormData,
    document: { getElementsByClassName: () => [] },
    fetch(url, options) {
      let resolve;
      let reject;
      const promise = new Promise((success, failure) => { resolve = success; reject = failure; });
      requests.push({
        method: options.method,
        route: new URL(url).pathname.slice(1),
        token: options.headers.Authorization.slice("Bearer ".length),
        reply(ok, data) { resolve({ ok, json: async () => data }); },
        invalidJson() { resolve({ ok: true, json: async () => { throw new SyntaxError("JSON inválido"); } }); },
        reject,
      });
      return promise;
    },
  });
  const dependency = (value) => new SyntheticModule(["default"], function () {
    this.setExport("default", value);
  }, { context });
  const apiModule = new SourceTextModule(await readFile(new URL("../src/services/Api.js", import.meta.url), "utf8"), {
    context,
    initializeImportMeta(meta) { meta.env = { VITE_API_URL: "https://api.example.test" }; },
  });
  await apiModule.link(() => dependency(storage));
  const source = await readFile(new URL("../src/controllers/Auth.js", import.meta.url), "utf8");
  const module = new SourceTextModule(source, { context });
  await module.link((specifier) => {
    if (specifier.includes("Api")) return apiModule;
    return dependency(specifier.includes("store") ? store : router);
  });
  await module.evaluate();
  return { auth: module.namespace.default, api: apiModule.namespace.default, state, requests, navigations };
}

const flush = () => new Promise((resolve) => setImmediate(resolve));

test("logout remove a sessão local sem esperar a resposta e revoga o token anterior", async () => {
  const { auth, api, state, requests, navigations } = await authFixture();
  const pending = auth.logout();
  assert.equal(api.auth_token(), "");
  assert.equal(state.auth, false);
  assert.equal(state.loading, false);
  assert.equal(Object.keys(state.user).length, 0);
  assert.deepEqual(navigations, [["replace", "/"]]);
  assert.equal(requests[0].token, "token-atual");
  assert.equal(requests[0].route, "auth/logout");
  requests[0].reply(true, []);
  await pending;
});

test("refresh iniciado antes de sair não restaura token ou usuário ao responder depois", async () => {
  const { auth, api, state, requests } = await authFixture();
  auth.refresh();
  const pending = auth.logout();
  requests[1].reply(true, []);
  await pending;
  requests[0].reply(true, { token: "token-renovado", user: { name: "Admin" } });
  await flush();
  assert.equal(api.auth_token(), "");
  assert.equal(state.auth, false);
  assert.equal(Object.keys(state.user).length, 0);
});

test("login iniciado antes de sair não restaura a sessão quando termina", async () => {
  const { auth, api, state, requests } = await authFixture();
  auth.login({ username: "admin", password: "senha-de-teste" });
  const pending = auth.logout();
  requests[1].reply(true, []);
  await pending;
  requests[0].reply(true, { token: "token-login", user: { name: "Admin" } });
  await flush();
  assert.equal(api.auth_token(), "");
  assert.equal(state.auth, false);
});

test("resposta de logout inválida ou erro de rede não mantém a sessão nem duplica o callback", async () => {
  for (const failure of ["invalidJson", "network"]) {
    const { auth, api, state, requests } = await authFixture();
    const callbacks = [];
    const pending = auth.logout((resp, data) => callbacks.push({ resp, data }));
    if (failure === "invalidJson") requests[0].invalidJson();
    else requests[0].reject(new Error("sem conexão"));
    await pending;
    assert.equal(callbacks.length, 1);
    assert.equal(callbacks[0].resp, false);
    assert.equal(api.auth_token(), "");
    assert.equal(state.auth, false);
    assert.equal(state.loading, false);
  }
});

test("respostas antigas não substituem um novo login após sair", async () => {
  const { auth, api, state, requests } = await authFixture();
  auth.refresh();
  const pendingLogout = auth.logout();
  auth.login({ username: "outro", password: "senha-de-teste" });
  requests[2].reply(true, { token: "token-outro", user: { name: "Outro" } });
  await flush();
  requests[0].reply(true, { token: "token-admin-renovado", user: { name: "Admin" } });
  requests[1].reply(true, []);
  await pendingLogout;
  await flush();
  assert.equal(api.auth_token(), "token-outro");
  assert.equal(state.auth, true);
  assert.equal(state.user.name, "Outro");
});

test("renovação do router e troca de senha simultâneas compartilham o pedido sem perder callbacks", async () => {
  const { auth, api, state, requests } = await authFixture();
  let routeRefreshCompleted = false;
  let passwordChanged = false;
  auth.refresh(() => { routeRefreshCompleted = true; });
  auth.changePassword({ password: "NovaSenha123" }, (success) => { passwordChanged = success; });
  assert.equal(requests.length, 1);
  requests[0].reply(true, { token: "token-renovado", user: { name: "Admin" } });
  await flush();
  assert.equal(routeRefreshCompleted, true);
  assert.equal(requests[1].route, "auth/change-password");
  assert.equal(requests[1].token, "token-renovado");
  requests[1].reply(true, { message: "Senha alterada" });
  await flush();
  assert.equal(requests[2].route, "auth/refresh-token");
  requests[2].reply(true, { token: "token-final", user: { name: "Admin" } });
  await flush();
  assert.equal(passwordChanged, true);
  assert.equal(api.auth_token(), "token-final");
  assert.equal(state.loading, false);
});
