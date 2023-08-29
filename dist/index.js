"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrapThatApp = exports.httpClient = exports.globalOptions = exports.setupHTTPClient = exports.setupGlobalOptions = exports.useDeleteAPI = exports.usePatchAPI = exports.usePutAPI = exports.usePostAPI = exports.useGetAPI = void 0;
var useEasyHook_1 = require("./hooks/useEasyHook");
Object.defineProperty(exports, "useGetAPI", { enumerable: true, get: function () { return useEasyHook_1.useGetAPI; } });
Object.defineProperty(exports, "usePostAPI", { enumerable: true, get: function () { return useEasyHook_1.usePostAPI; } });
Object.defineProperty(exports, "usePutAPI", { enumerable: true, get: function () { return useEasyHook_1.usePutAPI; } });
Object.defineProperty(exports, "usePatchAPI", { enumerable: true, get: function () { return useEasyHook_1.usePatchAPI; } });
Object.defineProperty(exports, "useDeleteAPI", { enumerable: true, get: function () { return useEasyHook_1.useDeleteAPI; } });
var setup_1 = require("./hooks/setup");
Object.defineProperty(exports, "setupGlobalOptions", { enumerable: true, get: function () { return setup_1.setupGlobalOptions; } });
Object.defineProperty(exports, "setupHTTPClient", { enumerable: true, get: function () { return setup_1.setupHTTPClient; } });
Object.defineProperty(exports, "globalOptions", { enumerable: true, get: function () { return setup_1.globalOptions; } });
Object.defineProperty(exports, "httpClient", { enumerable: true, get: function () { return setup_1.httpClient; } });
var WrapThatApp_1 = require("./hooks/WrapThatApp");
Object.defineProperty(exports, "WrapThatApp", { enumerable: true, get: function () { return WrapThatApp_1.WrapThatApp; } });
//# sourceMappingURL=index.js.map