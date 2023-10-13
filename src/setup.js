"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHTTPClient = exports.httpClient = exports.setupGlobalOptions = exports.globalOptions = void 0;
exports.globalOptions = null;
const setupGlobalOptions = (options) => {
    exports.globalOptions = options;
};
exports.setupGlobalOptions = setupGlobalOptions;
// Variable to hold the global HTTP client
exports.httpClient = null;
// Function to set up the global HTTP client
const setupHTTPClient = (client, defaultHeaders) => {
    exports.httpClient = Object.assign(Object.assign({}, client), { defaultHeaders });
};
exports.setupHTTPClient = setupHTTPClient;
