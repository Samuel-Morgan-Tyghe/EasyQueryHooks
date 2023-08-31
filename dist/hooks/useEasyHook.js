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
exports.useGetInfiniteAPI = exports.useDeleteAPI = exports.usePutAPI = exports.usePatchAPI = exports.usePostAPI = exports.useGetAPI = void 0;
// Importing necessary functions and types from React Query
var react_query_1 = require("@tanstack/react-query");
// Importing API call methods
var API_1 = require("../API");
var setup_1 = require("./setup");
// Hook to handle GET API calls
function useGetAPI(_a) {
    var _this = this;
    var url = _a.url, options = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient;
    var _b = setup_1.easyQueryHooksProps || {}, defaultHeaders = _b.defaultHeaders, globalGet = _b.get, defaultUseQuery = _b.useQuery, queryOptions = _b.queryOptions;
    // Determine which HTTP client to use
    var client = localHttpClient || globalGet || API_1.get;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useQuery = defaultUseQuery || react_query_1.useQuery;
    return useQuery([url], function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, client({ url: url, header: header })];
    }); }); }, __assign(__assign({}, queryOptions), options));
}
exports.useGetAPI = useGetAPI;
// Hook to handle POST API calls
function usePostAPI(_a) {
    var _this = this;
    var url = _a.url, options = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient;
    var _b = setup_1.easyQueryHooksProps || {}, defaultHeaders = _b.defaultHeaders, globalPost = _b.post, defaultUseMutation = _b.useMutation, mutationOptions = _b.mutationOptions;
    // Determine which HTTP client to use
    var client = localHttpClient || globalPost || API_1.post;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useMutation = defaultUseMutation || react_query_1.useMutation;
    return useMutation(__assign(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, mutationOptions), options));
}
exports.usePostAPI = usePostAPI;
// Hook to handle PATCH API calls
function usePatchAPI(_a) {
    var _this = this;
    var url = _a.url, options = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient;
    var _b = setup_1.easyQueryHooksProps || {}, defaultHeaders = _b.defaultHeaders, globalPatch = _b.patch, defaultUseMutation = _b.useMutation, mutationOptions = _b.mutationOptions;
    // Determine which HTTP client to use
    var client = localHttpClient || globalPatch || API_1.patch;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useMutation = defaultUseMutation || react_query_1.useMutation;
    return useMutation(__assign(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, mutationOptions), options));
}
exports.usePatchAPI = usePatchAPI;
// Hook to handle PUT API calls
function usePutAPI(_a) {
    var _this = this;
    var url = _a.url, options = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient;
    var _b = setup_1.easyQueryHooksProps || {}, defaultHeaders = _b.defaultHeaders, globalPut = _b.put, defaultUseMutation = _b.useMutation, mutationOptions = _b.mutationOptions;
    // Determine which HTTP client to use
    var client = localHttpClient || globalPut || API_1.put;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useMutation = defaultUseMutation || react_query_1.useMutation;
    return useMutation(__assign(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, mutationOptions), options));
}
exports.usePutAPI = usePutAPI;
// Hook to handle DELETE API calls
function useDeleteAPI(_a) {
    var _this = this;
    var url = _a.url, options = _a.options, localHeaders = _a.headers, localHttpClient = _a.httpClient;
    var _b = setup_1.easyQueryHooksProps || {}, defaultHeaders = _b.defaultHeaders, globalDelete = _b.delete, defaultUseMutation = _b.useMutation, mutationOptions = _b.mutationOptions;
    // Determine which HTTP client to use
    var client = localHttpClient || globalDelete || API_1.remove;
    // Combine default and custom headers
    var header = __assign(__assign({}, defaultHeaders), localHeaders);
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    var useMutation = defaultUseMutation || react_query_1.useMutation;
    return useMutation(__assign(__assign({ mutationFn: function (requestData) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Perform the API call, either using the local or global HTTP client
                return [2 /*return*/, client({ url: url, data: requestData, header: header })];
            });
        }); } }, mutationOptions), options));
}
exports.useDeleteAPI = useDeleteAPI;
// Hook to handle GET API calls with pagination (infinite scroll)
function useGetInfiniteAPI(_a) {
    var _this = this;
    var url = _a.url, options = _a.options, localHeaders = _a.headers, hasParams = _a.hasParams, localHttpClient = _a.httpClient;
    var _b = setup_1.easyQueryHooksProps || {}, defaultHeaders = _b.defaultHeaders, globalGet = _b.get, defaultUseInfiiniteQuery = _b.useInfiniteQuery, infiniteQueryOptions = _b.infiniteQueryOptions;
    // Determine which HTTP client to use
    var client = localHttpClient || globalGet || API_1.get;
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
//# sourceMappingURL=useEasyHook.js.map