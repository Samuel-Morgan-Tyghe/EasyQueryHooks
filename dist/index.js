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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteAPI = exports.usePutAPI = exports.usePatchAPI = exports.usePostAPI = exports.useGetInfiniteAPI = exports.useGetAPI = exports.setUpEasyQueryHooks = exports.easyQueryHooksProps = exports.getDefaultClient = exports.remove = exports.patch = exports.put = exports.post = exports.get = void 0;
var react_query_1 = require("@tanstack/react-query");
// API Functions
function api(_a) {
    var method = _a.method, url = _a.url, body = _a.body, headers = _a.headers;
    return __awaiter(this, void 0, void 0, function () {
        var response, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: method,
                        body: JSON.stringify(body),
                        headers: __assign({ "Content-Type": "application/json" }, headers),
                    })];
                case 1:
                    response = _c.sent();
                    if (!!response.ok) return [3 /*break*/, 3];
                    _b = Error;
                    return [4 /*yield*/, response.text()];
                case 2: throw _b.apply(void 0, [_c.sent()]);
                case 3: return [4 /*yield*/, response.json()];
                case 4: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.default = api;
var get = function (_a) {
    var url = _a.url, header = _a.header;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, api({ method: "GET", url: url, headers: header })];
    }); });
};
exports.get = get;
var post = function (_a) {
    var url = _a.url, data = _a.data, header = _a.header;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, api({ method: "POST", url: url, body: data, headers: header })];
    }); });
};
exports.post = post;
var put = function (_a) {
    var url = _a.url, data = _a.data, header = _a.header;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, api({ method: "PUT", url: url, body: data, headers: header })];
    }); });
};
exports.put = put;
var patch = function (_a) {
    var url = _a.url, data = _a.data, header = _a.header;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, api({ method: "PATCH", url: url, body: data, headers: header })];
    }); });
};
exports.patch = patch;
var remove = function (_a) {
    var url = _a.url, data = _a.data, header = _a.header;
    return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_b) {
        return [2 /*return*/, api({ method: "DELETE", url: url, body: data, headers: header })];
    }); });
};
exports.remove = remove;
var getDefaultClient = function (key) { var _a; return ((_a = { get: exports.get, post: exports.post, put: exports.put, patch: exports.patch, remove: exports.remove }[key]) !== null && _a !== void 0 ? _a : exports.get); };
exports.getDefaultClient = getDefaultClient;
// Setup Function
exports.easyQueryHooksProps = null;
var setUpEasyQueryHooks = function (easyQueryHooksArgs) {
    exports.easyQueryHooksProps = easyQueryHooksArgs;
};
exports.setUpEasyQueryHooks = setUpEasyQueryHooks;
// Hook to handle GET API calls
function useGetAPI(_a) {
    var _this = this;
    var localUrl = _a.url, _b = _a.showPrefix, showPrefix = _b === void 0 ? true : _b, options = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient;
    var _c = exports.easyQueryHooksProps || {}, defaultHeaders = _c.defaultHeaders, globalGet = _c.get, defaultUseQuery = _c.useQuery, queryOptions = _c.queryOptions, prefixUrl = _c.prefixUrl;
    // Add UrlPrefix if it exists
    var url = showPrefix ? "".concat(prefixUrl).concat(localUrl) : localUrl;
    // Determine which HTTP client to use
    var client = localHttpClient || globalGet || exports.get;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useQuery = defaultUseQuery || react_query_1.useQuery;
    return useQuery([url], function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, client({ url: url, header: header })];
    }); }); }, __assign(__assign({}, queryOptions), options));
}
exports.useGetAPI = useGetAPI;
// Hook to handle GET API calls with pagination (infinite scroll)
function useGetInfiniteAPI(_a) {
    var _this = this;
    var localUrl = _a.url, _b = _a.showPrefix, showPrefix = _b === void 0 ? true : _b, options = _a.options, localHeaders = _a.headers, hasParams = _a.hasParams, localHttpClient = _a.httpClient;
    var _c = exports.easyQueryHooksProps || {}, defaultHeaders = _c.defaultHeaders, globalGet = _c.get, defaultUseInfiiniteQuery = _c.useInfiniteQuery, infiniteQueryOptions = _c.infiniteQueryOptions, prefixUrl = _c.prefixUrl;
    // Add UrlPrefix if it exists
    var url = showPrefix ? "".concat(prefixUrl).concat(localUrl) : localUrl;
    // Determine which HTTP client to use
    var client = localHttpClient || globalGet || exports.get;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useInfiniteQuery = defaultUseInfiiniteQuery || react_query_1.useInfiniteQuery;
    return useInfiniteQuery([url], function (_a) {
        var _b = _a.pageParam, pageParam = _b === void 0 ? 1 : _b;
        return __awaiter(_this, void 0, void 0, function () {
            var formaturl;
            return __generator(this, function (_c) {
                formaturl = "".concat(url).concat(hasParams ? "&" : "?", "page=").concat(pageParam);
                return [2 /*return*/, client({ url: formaturl, header: header })];
            });
        });
    }, __assign(__assign({}, infiniteQueryOptions), options));
}
exports.useGetInfiniteAPI = useGetInfiniteAPI;
// Use Mutation Hooks
function getMutationConfigs(_a) {
    var localUrl = _a.url, _b = _a.showPrefix, showPrefix = _b === void 0 ? true : _b, localOptions = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient, method = _a.method;
    var _c = exports.easyQueryHooksProps || {}, defaultHeaders = _c.defaultHeaders, _d = method, globalClient = _c[_d], defaultUseMutation = _c.useMutation, mutationOptions = _c.mutationOptions, prefixUrl = _c.prefixUrl;
    // Add UrlPrefix if it exists
    var url = showPrefix ? "".concat(prefixUrl).concat(localUrl) : localUrl;
    // Determine which HTTP client to use
    var client = localHttpClient || globalClient || (0, exports.getDefaultClient)(method);
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // combine default and custom options
    var options = __assign(__assign({}, mutationOptions), localOptions);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useMutation = defaultUseMutation || react_query_1.useMutation;
    return { useMutation: useMutation, header: header, client: client, url: url, options: options };
}
// Hook to handle POST API calls
function usePostAPI(props) {
    var _this = this;
    var _a = getMutationConfigs(__assign(__assign({}, props), { method: "post" })), useMutation = _a.useMutation, header = _a.header, client = _a.client, url = _a.url, options = _a.options;
    return useMutation(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, options));
}
exports.usePostAPI = usePostAPI;
// Hook to handle PATCH API calls
function usePatchAPI(props) {
    var _this = this;
    var _a = getMutationConfigs(__assign(__assign({}, props), { method: "post" })), useMutation = _a.useMutation, header = _a.header, client = _a.client, url = _a.url, options = _a.options;
    return useMutation(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, options));
}
exports.usePatchAPI = usePatchAPI;
// Hook to handle PUT API calls
function usePutAPI(props) {
    var _this = this;
    var _a = getMutationConfigs(__assign(__assign({}, props), { method: "post" })), useMutation = _a.useMutation, header = _a.header, client = _a.client, url = _a.url, options = _a.options;
    return useMutation(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, options));
}
exports.usePutAPI = usePutAPI;
// Hook to handle DELETE API calls
function useDeleteAPI(props) {
    var _this = this;
    var _a = getMutationConfigs(__assign(__assign({}, props), { method: "post" })), useMutation = _a.useMutation, header = _a.header, client = _a.client, url = _a.url, options = _a.options;
    return useMutation(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, options));
}
exports.useDeleteAPI = useDeleteAPI;
//# sourceMappingURL=index.js.map