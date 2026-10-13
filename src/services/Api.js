//import store from '@/store'

import Storage from "@/helpers/Storage.js";

export default {
  get(route, options = null, callback = function () {}) {
    this.call("get", route, options, null, (resp, data) => {
      callback(resp, data);
    });
  },

  post(route, body = null, callback = function () {}) {
    this.call("post", route, null, body, (resp, data) => {
      callback(resp, data);
    });
  },

  patch(route, body = null, callback = function () {}) {
    this.call("put", route, null, body, (resp, data) => {
      callback(resp, data);
    });
  },

  remove(route, callback = function () {}) {
    this.call("delete", route, null, null, (resp, data) => {
      callback(resp, data);
    });
  },

  async call(
    method,
    route,
    options = null,
    body = null,
    callback = function () {}
  ) {
    let params = "";
    if (options) {
      params = `?${this.data_to_url(options)}`;
    }

    let url = this.url(route + params);

    const headers = this.headers();
    if (body instanceof FormData) {
      delete headers["Content-Type"];
    } else if (body) {
      body = JSON.stringify(body || {});
    }

    let response;
    try {
      response = await fetch(url, { method, headers, body });
    } catch (error) {
      callback(false, { error: `Erro ao conectar: ${error.message}` });
      return false;
    }
    let data;
    try {
      data = response.status === 204 ? {} : await response.json();
      if (data === null || typeof data !== "object") throw new Error();
    } catch {
      callback(false, { error: `Resposta inválida do servidor (HTTP ${response.status}).` });
      return false;
    }
    const success = response.ok && !data.error;
    callback(success, data);
    return success;
  },
  base_url() {
    if (import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    } else if (window.location.hostname == "localhost") {
      return "http://localhost:8787";
    } else {
      return "https://api.louvorja.com.br";
    }
  },
  url(route) {
    let url = `${this.base_url()}/${route}`;
    return url;
  },
  headers() {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.auth_token()}`,
    };
  },
  data_to_url(data) {
    return new URLSearchParams(data).toString();
  },
  auth_token() {
    return Storage.get("token", "");
  },
  set_token(token) {
    return Storage.set("token", token);
  },
  remove_token() {
    return Storage.remove("token");
  },
};
