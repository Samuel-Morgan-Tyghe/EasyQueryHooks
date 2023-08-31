// Importing necessary functions and types from React Query
import {
  MutationOptions,
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useMutation as useBackupMutation,
  useQuery as useBackupQuery,
  useInfiniteQuery as useBackupInfiniteQuery,
} from "@tanstack/react-query";
// Importing API call methods
import { get, patch, post, put, remove } from "../API";
import { WithDataApi, easyQueryHooksProps } from "./setup";

type UseHooksProps<T> = {
  url: string;
  options?: UseQueryOptions<T>;
  headers?: Record<string, string>;
  httpClient?: WithDataApi;
};
type UseInfinityHooksProps<T> = {
  url: string;
  options?: UseInfiniteQueryOptions<T>;
  headers?: Record<string, string>;
  httpClient?: WithDataApi;
  hasParams?: boolean;
};
type UseMutateHooksProps<TRequest, TResponse> = {
  url: string;
  options?: MutationOptions<TResponse, unknown, TRequest, unknown>;
  headers?: Record<string, string>;
  httpClient?: WithDataApi;
};

// Hook to handle GET API calls
export function useGetAPI<T>({
  url,
  options,
  headers: localHeaders,
  httpClient: localHttpClient,
}: UseHooksProps<T>) {
  const {
    defaultHeaders,
    get: globalGet,
    useQuery: defaultUseQuery,
    queryOptions,
  } = easyQueryHooksProps || {};

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

// Hook to handle POST API calls
export function usePostAPI<TRequest, TResponse>({
  url,
  options,
  headers: localHeaders,
  httpClient: localHttpClient,
}: UseMutateHooksProps<TRequest, TResponse>) {
  const {
    defaultHeaders,
    post: globalPost,
    useMutation: defaultUseMutation,
    mutationOptions,
  } = easyQueryHooksProps || {};

  // Determine which HTTP client to use
  const client = localHttpClient || globalPost || post;

  // Combine default and custom headers
  const header = {
    ...defaultHeaders,
    ...localHeaders,
  };
  // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
  const useMutation = defaultUseMutation || useBackupMutation;

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...mutationOptions,
    ...options,
  });
}

// Hook to handle PATCH API calls
export function usePatchAPI<TRequest, TResponse>({
  url,
  options,
  headers: localHeaders,
  httpClient: localHttpClient,
}: UseMutateHooksProps<TRequest, TResponse>) {
  const {
    defaultHeaders,
    patch: globalPatch,
    useMutation: defaultUseMutation,
    mutationOptions,
  } = easyQueryHooksProps || {};

  // Determine which HTTP client to use
  const client = localHttpClient || globalPatch || patch;

  // Combine default and custom headers
  const header = {
    ...defaultHeaders,
    ...localHeaders,
  };
  // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
  const useMutation = defaultUseMutation || useBackupMutation;

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...mutationOptions,
    ...options,
  });
}

// Hook to handle PUT API calls
export function usePutAPI<TRequest, TResponse>({
  url,
  options,
  headers: localHeaders,
  httpClient: localHttpClient,
}: UseMutateHooksProps<TRequest, TResponse>) {
  const {
    defaultHeaders,
    put: globalPut,
    useMutation: defaultUseMutation,
    mutationOptions,
  } = easyQueryHooksProps || {};

  // Determine which HTTP client to use
  const client = localHttpClient || globalPut || put;

  // Combine default and custom headers
  const header = {
    ...defaultHeaders,
    ...localHeaders,
  };
  // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
  const useMutation = defaultUseMutation || useBackupMutation;

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...mutationOptions,
    ...options,
  });
}

// Hook to handle DELETE API calls
export function useDeleteAPI<TRequest, TResponse>({
  url,
  options,
  headers: localHeaders,
  httpClient: localHttpClient,
}: UseMutateHooksProps<TRequest, TResponse>) {
  const {
    defaultHeaders,
    delete: globalDelete,
    useMutation: defaultUseMutation,
    mutationOptions,
  } = easyQueryHooksProps || {};

  // Determine which HTTP client to use
  const client = localHttpClient || globalDelete || remove;

  // Combine default and custom headers
  const header = {
    ...defaultHeaders,
    ...localHeaders,
  };

  // defaultUseQuery could be null so we need to pass a backup query , the backupquery wont work
  const useMutation = defaultUseMutation || useBackupMutation;
  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (requestData: TRequest) => {
      // Perform the API call, either using the local or global HTTP client
      return client({ url, data: requestData, header });
    },
    ...mutationOptions,
    ...options,
  });
}

// Hook to handle GET API calls with pagination (infinite scroll)
export function useGetInfiniteAPI<T>({
  url,
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
  } = easyQueryHooksProps || {};

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
