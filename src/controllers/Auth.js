import store from "@/store";
import router from '../router';

const Api = require("@/services/Api");

export function login(params, callback = function () { }) {
    store.commit('setLoading', true);
    Api.post('auth/login', params, function (resp, data) {
        store.commit('setLoading', false);
        store.commit('setAuth', resp);
        store.commit('setUser', data.user);
        if (resp) {
            Api.set_token(data.token);
        }
        callback(resp, data);
    });
}

export function logout(callback = function () { }) {
    store.commit('setLoading', true);
    Api.post('auth/logout', null, function (resp, data) {
        //console.log('auth/logout', resp, data)
        store.commit('setLoading', false);
        store.commit('setAuth', false);
        store.commit('setUser', data.user);
        Api.remove_token();
        router.push('/');
        callback(resp, data);
    });
}

export function refresh(callback = function () { }) {
    let token = Api.auth_token();
    if (token) {
        store.commit('setLoading', true);
        Api.post('auth/refresh-token', [], function (resp, data) {
            //console.log("refresh-token", resp, data)
            store.commit('setStart', true);
            store.commit('setLoading', false);
            store.commit('setAuth', resp);
            store.commit('setUser', data.user);
            if (resp) {
                console.log("refresh")
                Api.set_token(data.token);
            } else {
                Api.remove_token();
                removeElements();
            }
            callback(resp, data);
        });
    } else {
        store.commit('setStart', true);
        store.commit('setLoading', false);
        store.commit('setAuth', false);
        callback(false, null);
    }
}

export function changePassword(params, callback = function () { }) {
    refresh(function (resp, data) {
        if (!resp) {
            callback(resp, data);
        } else {
            store.commit('setLoading', true);
            Api.post('auth/change-password', params, function (resp, data) {
                store.commit('setLoading', false);
                callback(resp, data);
            });
        }
    });
}

export function removeElements() {
    const backdrops = document.getElementsByClassName('modal-backdrop');
    Array.from(backdrops).forEach(backdrop => backdrop.parentNode.removeChild(backdrop));
}