"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.patch = exports.put = exports.post = exports.get = void 0;
function api({ method, endpoint, body, headers, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(endpoint, {
            method,
            body: JSON.stringify(body),
            headers: Object.assign({ "Content-Type": "application/json" }, headers),
        });
        if (!response.ok) {
            throw Error(yield response.text());
        }
        const data = yield response.json();
        return data;
    });
}
exports.default = api;
const get = (endpoint, headers) => __awaiter(void 0, void 0, void 0, function* () {
    return api({ method: "GET", endpoint, headers });
});
exports.get = get;
const post = (endpoint, body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    return api({ method: "POST", endpoint, body, headers });
});
exports.post = post;
const put = (endpoint, body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    return api({ method: "PUT", endpoint, body, headers });
});
exports.put = put;
const patch = (endpoint, body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    return api({ method: "PATCH", endpoint, body, headers });
});
exports.patch = patch;
const remove = (endpoint, body, headers) => __awaiter(void 0, void 0, void 0, function* () {
    return api({ method: "DELETE", endpoint, body, headers });
});
exports.remove = remove;
