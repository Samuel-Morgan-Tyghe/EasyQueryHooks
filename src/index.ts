import {
  useInfiniteQuery as useBackupInfiniteQuery,
  useMutation as useBackupMutation,
  useQuery as useBackupQuery,
} from "@tanstack/react-query";
import {
  ApiOptions,
  EasyQueryHooksPropTypes,
  HttpClientParams,
  UseHooksProps,
  UseInfinityHooksProps,
  UseMutateHooksProps,
} from "./types";

// API Functions
export default async function api({ method, url, body, headers }: ApiOptions) {
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

export const get = async ({ url, header }: HttpClientParams) =>
  api({ method: "GET", url, headers: header });
export const post = async ({ url, data, header }: HttpClientParams) =>
  api({ method: "POST", url, body: data, headers: header });
export const put = async ({ url, data, header }: HttpClientParams) =>
  api({ method: "PUT", url, body: data, headers: header });
export const patch = async ({ url, data, header }: HttpClientParams) =>
  api({ method: "PATCH", url, body: data, headers: header });
export const remove = async ({ url, data, header }: HttpClientParams) =>
  api({ method: "DELETE", url, body: data, headers: header });
export const getDefaultClient = (key: string) =>
  ({ get, post, put, patch, remove }[key] ?? get);

// Setup Function
export let easyQueryHooksProps: EasyQueryHooksPropTypes | null = null;

export const setUpEasyQueryHooks = (
  easyQueryHooksArgs: EasyQueryHooksPropTypes
) => {
  easyQueryHooksProps = easyQueryHooksArgs;
};

// Hook to handle GET API calls
export function useGetAPI<T>({
  url: localUrl,
  showPrefix = true,
  options,
  headers: localHeaders,
  httpClient: localHttpClient,
}: UseHooksProps<T>) {
  const {
    defaultHeaders,
    get: globalGet,
    useQuery: defaultUseQuery,
    queryOptions,
    prefixUrl,
  } = easyQueryHooksProps || {};

  // Add UrlPrefix if it exists
  const url = showPrefix ? `${prefixUrl}${localUrl}` : localUrl;

  // Determine which HTTP client to use
  const client = localHttpClient || globalGet || get;

  // Combine default and custom headers
  const header = {
    ...defaultHeaders,
    ...localHeaders,
  };

  // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
  const useQuery = defaultUseQuery || useBackupQuery;
  return useQuery<T>([url], async () => client({ url, header }), {
    ...queryOptions,
    ...options,
  });
}

// Hook to handle GET API calls with pagination (infinite scroll)
export function useGetInfiniteAPI<T>({
  url: localUrl,
  showPrefix = true,
  options,
  headers: localHeaders,
  hasParams,
  httpClient: localHttpClient,
}: UseInfinityHooksProps<T>) {
  const {
    defaultHeaders,
    get: globalGet,
    useInfiniteQuery: defaultUseInfiiniteQuery,
    infiniteQueryOptions,
    prefixUrl,
  } = easyQueryHooksProps || {};

  // Add UrlPrefix if it exists
  const url = showPrefix ? `${prefixUrl}${localUrl}` : localUrl;

  // Determine which HTTP client to use
  const client = localHttpClient || globalGet || get;

  // Combine default and custom headers
  const header = {
    ...defaultHeaders,
    ...localHeaders,
  };

  // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
  const useInfiniteQuery = defaultUseInfiiniteQuery || useBackupInfiniteQuery;

  return useInfiniteQuery<T>(
    [url],
    async ({ pageParam = 1 }) => {
      // Construct url based on whether it already has query parameters
      const formaturl = `${url}${hasParams ? "&" : "?"}page=${pageParam}`;
      return client({ url: formaturl, header });
    },
    { ...infiniteQueryOptions, ...options }
  );
}

// Use Mutation Hooks

function getMutationConfigs<TRequest, TResponse>({
  url: localUrl,
  showPrefix = true,
  options: localOptions,
  headers: localHeaders,
  httpClient: localHttpClient,
  method,
}: UseMutateHooksProps<TRequest, TResponse> & {
  method: "post" | "put" | "patch" | "delete";
}) {
  const {
    defaultHeaders,
    [method]: globalClient,
    useMutation: defaultUseMutation,
    mutationOptions,
    prefixUrl,
  } = easyQueryHooksProps || {};

  // Add UrlPrefix if it exists
  const url = showPrefix ? `${prefixUrl}${localUrl}` : localUrl;

  // Determine which HTTP client to use
  const client = localHttpClient || globalClient || getDefaultClient(method);

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
  const useMutation = defaultUseMutation || useBackupMutation;

  return { useMutation, header, client, url, options };
}

// Hook to handle POST API calls
export function usePostAPI<TRequest, TResponse>(
  props: UseMutateHooksProps<TRequest, TResponse>
) {
  const { useMutation, header, client, url, options } = getMutationConfigs<
    TRequest,
    TResponse
  >({ ...props, method: "post" });

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...options,
  });
}

// Hook to handle PATCH API calls
export function usePatchAPI<TRequest, TResponse>(
  props: UseMutateHooksProps<TRequest, TResponse>
) {
  const { useMutation, header, client, url, options } = getMutationConfigs<
    TRequest,
    TResponse
  >({ ...props, method: "post" });

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...options,
  });
}

// Hook to handle PUT API calls
export function usePutAPI<TRequest, TResponse>(
  props: UseMutateHooksProps<TRequest, TResponse>
) {
  const { useMutation, header, client, url, options } = getMutationConfigs<
    TRequest,
    TResponse
  >({ ...props, method: "post" });

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...options,
  });
}

// Hook to handle DELETE API calls
export function useDeleteAPI<TRequest, TResponse>(
  props: UseMutateHooksProps<TRequest, TResponse>
) {
  const { useMutation, header, client, url, options } = getMutationConfigs<
    TRequest,
    TResponse
  >({ ...props, method: "post" });

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...options,
  });
}
