import store from "@/store";
import router from "../router";

import Api from "@/services/Api";

let sessionRevision = 0;
let pendingRefresh = null;

export default {
  login(params, callback = function () {}) {
    const revision = ++sessionRevision;
    store.commit("setLoading", true);
    Api.post("auth/login", params, function (resp, data) {
      if (revision !== sessionRevision) return;
      store.commit("setLoading", false);
      store.commit("setAuth", resp);
      store.commit("setUser", data.user);
      if (resp) {
        Api.set_token(data.token);
      }
      callback(resp, data);
    });
  },
  logout(callback = function () {}) {
    sessionRevision++;
    let completed = false;
    const finish = (resp, data) => {
      if (completed) return;
      completed = true;
      callback(resp, data);
    };
    const request = Api.call("post", "auth/logout", null, null, finish);
    Api.remove_token();
    store.commit("setAuth", false);
    store.commit("setUser", {});
    store.commit("setLoading", false);
    store.commit("setStart", true);
    this.removeElements();
    router.replace("/");
    return request.catch((error) => {
      finish(false, { error: `Erro ao encerrar sessão no servidor: ${error.message}` });
      return false;
    });
  },

  refresh(callback = function () {}) {
    let self = this;
    let token = Api.auth_token();
    const revision = sessionRevision;
    if (token) {
      if (pendingRefresh?.revision === revision && pendingRefresh.token === token) {
        pendingRefresh.callbacks.push(callback);
        return;
      }
      const refresh = { revision, token, callbacks: [callback] };
      pendingRefresh = refresh;
      store.commit("setLoading", true);
      Api.post("auth/refresh-token", [], function (resp, data) {
        if (pendingRefresh === refresh) pendingRefresh = null;
        if (revision !== sessionRevision || Api.auth_token() !== token) return;
        store.commit("setStart", true);
        store.commit("setLoading", false);
        store.commit("setAuth", resp);
        store.commit("setUser", resp ? data.user : {});
        if (resp) {
          Api.set_token(data.token);
        } else {
          Api.remove_token();
          self.removeElements();
        }
        refresh.callbacks.forEach((callback) => callback(resp, data));
      });
    } else {
      store.commit("setStart", true);
      store.commit("setLoading", false);
      store.commit("setAuth", false);
      store.commit("setUser", {});
      callback(false, null);
    }
  },
  changePassword(params, callback = function () {}) {
    let self = this;
    self.refresh(function (resp, data) {
      if (!resp) {
        callback(resp, data);
      } else {
        store.commit("setLoading", true);
        Api.post("auth/change-password", params, function (resp, data) {
          store.commit("setLoading", false);
          self.refresh(function () {
            callback(resp, data);
          });
        });
      }
    });
  },
  removeElements() {
    const backdrops = document.getElementsByClassName("modal-backdrop");
    Array.from(backdrops).forEach((backdrop) =>
      backdrop.parentNode.removeChild(backdrop)
    );
  },
};
