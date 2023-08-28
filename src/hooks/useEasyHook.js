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
exports.useGetInfiniteAPI = exports.useDeleteAPI = exports.usePutAPI = exports.usePatchAPI = exports.usePostAPI = exports.useGetAPI = void 0;
// Importing necessary functions and types from React Query
const react_query_1 = require("react-query");
// Importing API call methods
const API_1 = require("../API");
const setup_1 = require("./setup");
// Hook to handle GET API calls
function useGetAPI({ endpoint, options, headers, httpClient: localHttpClient, }) {
    // Determine which HTTP client to use
    const client = localHttpClient || setup_1.httpClient;
    // Combine default and custom headers
    const combinedHeaders = Object.assign(Object.assign({}, client === null || client === void 0 ? void 0 : client.defaultHeaders), headers);
    return (0, react_query_1.useQuery)([endpoint], () => (client ? client.get(endpoint, combinedHeaders) : (0, API_1.get)(endpoint)), Object.assign(Object.assign({}, setup_1.globalOptions === null || setup_1.globalOptions === void 0 ? void 0 : setup_1.globalOptions.queryOptions), options));
}
exports.useGetAPI = useGetAPI;
// Hook to handle POST API calls
function usePostAPI({ endpoint, options, headers, httpClient: localHttpClient, }) {
    const client = localHttpClient || setup_1.httpClient;
    const combinedHeaders = Object.assign(Object.assign({}, client === null || client === void 0 ? void 0 : client.defaultHeaders), headers);
    return (0, react_query_1.useMutation)(Object.assign(Object.assign({ mutationFn: (data) => __awaiter(this, void 0, void 0, function* () {
            // Perform the API call, either using the local or global HTTP client
            return client
                ? client.post(endpoint, data, combinedHeaders)
                : (0, API_1.post)(endpoint, data, combinedHeaders);
        }) }, setup_1.globalOptions === null || setup_1.globalOptions === void 0 ? void 0 : setup_1.globalOptions.mutationOptions), options));
}
exports.usePostAPI = usePostAPI;
// Hook to handle PATCH API calls
function usePatchAPI({ endpoint, options, headers, httpClient: localHttpClient, }) {
    const client = localHttpClient || setup_1.httpClient;
    const combinedHeaders = Object.assign(Object.assign({}, client === null || client === void 0 ? void 0 : client.defaultHeaders), headers);
    return (0, react_query_1.useMutation)(Object.assign(Object.assign({ mutationFn: (data) => __awaiter(this, void 0, void 0, function* () {
            return client
                ? client.patch(endpoint, data, combinedHeaders)
                : (0, API_1.patch)(endpoint, data, combinedHeaders);
        }) }, setup_1.globalOptions === null || setup_1.globalOptions === void 0 ? void 0 : setup_1.globalOptions.mutationOptions), options));
}
exports.usePatchAPI = usePatchAPI;
// Hook to handle PUT API calls
function usePutAPI({ endpoint, options, headers, httpClient: localHttpClient, }) {
    const client = localHttpClient || setup_1.httpClient;
    const combinedHeaders = Object.assign(Object.assign({}, client === null || client === void 0 ? void 0 : client.defaultHeaders), headers);
    return (0, react_query_1.useMutation)(Object.assign(Object.assign({ mutationFn: (data) => __awaiter(this, void 0, void 0, function* () {
            return client
                ? client.put(endpoint, data, combinedHeaders)
                : (0, API_1.put)(endpoint, data, combinedHeaders);
        }) }, setup_1.globalOptions === null || setup_1.globalOptions === void 0 ? void 0 : setup_1.globalOptions.mutationOptions), options));
}
exports.usePutAPI = usePutAPI;
// Hook to handle DELETE API calls
function useDeleteAPI({ endpoint, options, headers, httpClient: localHttpClient, }) {
    const client = localHttpClient || setup_1.httpClient;
    const combinedHeaders = Object.assign(Object.assign({}, client === null || client === void 0 ? void 0 : client.defaultHeaders), headers);
    return (0, react_query_1.useMutation)(Object.assign(Object.assign({ mutationFn: () => __awaiter(this, void 0, void 0, function* () {
            return client
                ? client.delete(endpoint, combinedHeaders)
                : (0, API_1.remove)(endpoint, combinedHeaders);
        }) }, setup_1.globalOptions === null || setup_1.globalOptions === void 0 ? void 0 : setup_1.globalOptions.mutationOptions), options));
}
exports.useDeleteAPI = useDeleteAPI;
// Hook to handle GET API calls with pagination (infinite scroll)
function useGetInfiniteAPI({ endpoint, options, headers, hasParams, httpClient: localHttpClient, }) {
    const client = localHttpClient || setup_1.httpClient;
    const combinedHeaders = Object.assign(Object.assign({}, client === null || client === void 0 ? void 0 : client.defaultHeaders), headers);
    return (0, react_query_1.useInfiniteQuery)([endpoint], ({ pageParam = 1 }) => __awaiter(this, void 0, void 0, function* () {
        // Construct endpoint based on whether it already has query parameters
        const formatEndpoint = `${endpoint}${hasParams ? "&" : "?"}page=${pageParam}`;
        return client
            ? client.get(formatEndpoint, combinedHeaders)
            : (0, API_1.get)(formatEndpoint, combinedHeaders);
    }), Object.assign(Object.assign({}, setup_1.globalOptions === null || setup_1.globalOptions === void 0 ? void 0 : setup_1.globalOptions.infiniteQueryOptions), options));
}
exports.useGetInfiniteAPI = useGetInfiniteAPI;
