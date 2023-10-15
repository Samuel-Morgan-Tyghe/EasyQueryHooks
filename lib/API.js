"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultClient = exports.remove = exports.patch = exports.put = exports.post = exports.get = void 0;
async function api({ method, url, body, headers }) {
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    });
    if (!response.ok) {
        throw Error(await response.text());
    }
    const data = await response.json();
    return data;
}
exports.default = api;
const get = async ({ url, header }) => {
    return api({ method: "GET", url, headers: header });
};
exports.get = get;
const post = async ({ url, data, header }) => {
    return api({ method: "POST", url, body: data, headers: header });
};
exports.post = post;
const put = async ({ url, data, header }) => {
    return api({ method: "PUT", url, body: data, headers: header });
};
exports.put = put;
const patch = async ({ url, data, header }) => {
    return api({ method: "PATCH", url, body: data, headers: header });
};
exports.patch = patch;
const remove = async ({ url, data, header }) => {
    return api({ method: "DELETE", url, body: data, headers: header });
};
exports.remove = remove;
const getDefaultClient = (key) => ({
    get: exports.get,
    post: exports.post,
    put: exports.put,
    patch: exports.patch,
    remove: exports.remove,
}[key] ?? exports.get);
exports.getDefaultClient = getDefaultClient;
