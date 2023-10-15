"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDeleteAPI = exports.usePutAPI = exports.usePatchAPI = exports.usePostAPI = exports.useGetInfiniteAPI = exports.useGetAPI = exports.setUpEasyQueryHooks = exports.easyQueryHooksProps = exports.getDefaultClient = exports.remove = exports.patch = exports.put = exports.post = exports.get = void 0;
const react_query_1 = require("@tanstack/react-query");
// API Functions
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
    return await response.json();
}
exports.default = api;
const get = async ({ url, header }) => api({ method: "GET", url, headers: header });
exports.get = get;
const post = async ({ url, data, header }) => api({ method: "POST", url, body: data, headers: header });
exports.post = post;
const put = async ({ url, data, header }) => api({ method: "PUT", url, body: data, headers: header });
exports.put = put;
const patch = async ({ url, data, header }) => api({ method: "PATCH", url, body: data, headers: header });
exports.patch = patch;
const remove = async ({ url, data, header }) => api({ method: "DELETE", url, body: data, headers: header });
exports.remove = remove;
const getDefaultClient = (key) => ({ get: exports.get, post: exports.post, put: exports.put, patch: exports.patch, remove: exports.remove }[key] ?? exports.get);
exports.getDefaultClient = getDefaultClient;
// Setup Function
exports.easyQueryHooksProps = null;
const setUpEasyQueryHooks = (easyQueryHooksArgs) => {
    exports.easyQueryHooksProps = easyQueryHooksArgs;
};
exports.setUpEasyQueryHooks = setUpEasyQueryHooks;
// Hook to handle GET API calls
function useGetAPI({ url: localUrl, showPrefix = true, options, headers: localHeaders, httpClient: localHttpClient, }) {
    const { defaultHeaders, get: globalGet, useQuery: defaultUseQuery, queryOptions, prefixUrl, } = exports.easyQueryHooksProps || {};
    // Add UrlPrefix if it exists
    const url = showPrefix ? `${prefixUrl}${localUrl}` : localUrl;
    // Determine which HTTP client to use
    const client = localHttpClient || globalGet || exports.get;
    // Combine default and custom headers
    const header = {
        ...defaultHeaders,
        ...localHeaders,
    };
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    const useQuery = defaultUseQuery || react_query_1.useQuery;
    return useQuery([url], async () => client({ url, header }), {
        ...queryOptions,
        ...options,
    });
}
exports.useGetAPI = useGetAPI;
// Hook to handle GET API calls with pagination (infinite scroll)
function useGetInfiniteAPI({ url: localUrl, showPrefix = true, options, headers: localHeaders, hasParams, httpClient: localHttpClient, }) {
    const { defaultHeaders, get: globalGet, useInfiniteQuery: defaultUseInfiiniteQuery, infiniteQueryOptions, prefixUrl, } = exports.easyQueryHooksProps || {};
    // Add UrlPrefix if it exists
    const url = showPrefix ? `${prefixUrl}${localUrl}` : localUrl;
    // Determine which HTTP client to use
    const client = localHttpClient || globalGet || exports.get;
    // Combine default and custom headers
    const header = {
        ...defaultHeaders,
        ...localHeaders,
    };
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    const useInfiniteQuery = defaultUseInfiiniteQuery || react_query_1.useInfiniteQuery;
    return useInfiniteQuery([url], async ({ pageParam = 1 }) => {
        // Construct url based on whether it already has query parameters
        const formaturl = `${url}${hasParams ? "&" : "?"}page=${pageParam}`;
        return client({ url: formaturl, header });
    }, { ...infiniteQueryOptions, ...options });
}
exports.useGetInfiniteAPI = useGetInfiniteAPI;
// Use Mutation Hooks
function getMutationConfigs({ url: localUrl, showPrefix = true, options: localOptions, headers: localHeaders, httpClient: localHttpClient, method, }) {
    const { defaultHeaders, [method]: globalClient, useMutation: defaultUseMutation, mutationOptions, prefixUrl, } = exports.easyQueryHooksProps || {};
    // Add UrlPrefix if it exists
    const url = showPrefix ? `${prefixUrl}${localUrl}` : localUrl;
    // Determine which HTTP client to use
    const client = localHttpClient || globalClient || (0, exports.getDefaultClient)(method);
    // Combine default and custom headers
    const header = {
        ...defaultHeaders,
        ...localHeaders,
    };
    // combine default and custom options
    const options = {
        ...mutationOptions,
        ...localOptions,
    };
    // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
    const useMutation = defaultUseMutation || react_query_1.useMutation;
    return { useMutation, header, client, url, options };
}
// Hook to handle POST API calls
function usePostAPI(props) {
    const { useMutation, header, client, url, options } = getMutationConfigs({ ...props, method: "post" });
    return useMutation({
        mutationFn: async (requestData) => {
            // Perform the API call, either using the local or global HTTP client
            return client({ url, data: requestData, header });
        },
        ...options,
    });
}
exports.usePostAPI = usePostAPI;
// Hook to handle PATCH API calls
function usePatchAPI(props) {
    const { useMutation, header, client, url, options } = getMutationConfigs({ ...props, method: "post" });
    return useMutation({
        mutationFn: async (requestData) => {
            // Perform the API call, either using the local or global HTTP client
            return client({ url, data: requestData, header });
        },
        ...options,
    });
}
exports.usePatchAPI = usePatchAPI;
// Hook to handle PUT API calls
function usePutAPI(props) {
    const { useMutation, header, client, url, options } = getMutationConfigs({ ...props, method: "post" });
    return useMutation({
        mutationFn: async (requestData) => {
            // Perform the API call, either using the local or global HTTP client
            return client({ url, data: requestData, header });
        },
        ...options,
    });
}
exports.usePutAPI = usePutAPI;
// Hook to handle DELETE API calls
function useDeleteAPI(props) {
    const { useMutation, header, client, url, options } = getMutationConfigs({ ...props, method: "post" });
    return useMutation({
        mutationFn: async (requestData) => {
            // Perform the API call, either using the local or global HTTP client
            return client({ url, data: requestData, header });
        },
        ...options,
    });
}
exports.useDeleteAPI = useDeleteAPI;
