"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHTTPClient = exports.httpClient = exports.setupGlobalOptions = exports.globalOptions = void 0;
exports.globalOptions = null;
var setupGlobalOptions = function (options) {
    exports.globalOptions = options;
};
exports.setupGlobalOptions = setupGlobalOptions;
// Variable to hold the global HTTP client
exports.httpClient = null;
// Function to set up the global HTTP client
var setupHTTPClient = function (_a) {
    var client = _a.client, defaultHeaders = _a.defaultHeaders;
    exports.httpClient = __assign(__assign({}, client), { defaultHeaders: defaultHeaders });
};
exports.setupHTTPClient = setupHTTPClient;
//# sourceMappingURL=setup.js.map