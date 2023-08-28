// Importing necessary functions and types from React Query
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
// Importing API call methods
import { get, patch, post, put, remove } from "../API";
import {
  globalOptions,
  httpClient,
  HttpClientOption,
  UseHooksProps,
} from "./setup";

// Hook to handle GET API calls
export function useGetAPI<T>({
  endpoint,
  options,
  headers,
  httpClient: localHttpClient,
}: UseHooksProps & { options?: UseQueryOptions<T> } & HttpClientOption) {
  // Determine which HTTP client to use
  const client = localHttpClient || httpClient;
  // Combine default and custom headers
  const combinedHeaders = { ...client?.defaultHeaders, ...headers };

  return useQuery<T>(
    [endpoint],
    () => (client ? client.get(endpoint, combinedHeaders) : get(endpoint)),
    { ...globalOptions?.queryOptions, ...options }
  );
}
// Hook to handle POST API calls
export function usePostAPI<TRequest, TResponse>({
  endpoint,
  options,
  headers,
  httpClient: localHttpClient,
}: UseHooksProps & {
  options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption) {
  const client = localHttpClient || httpClient;
  const combinedHeaders = { ...client?.defaultHeaders, ...headers };

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (data) => {
      // Perform the API call, either using the local or global HTTP client
      return client
        ? client.post(endpoint, data, combinedHeaders)
        : post(endpoint, data, combinedHeaders);
    },
    ...globalOptions?.mutationOptions,
    ...options,
  });
}

// Hook to handle PATCH API calls
export function usePatchAPI<TRequest, TResponse>({
  endpoint,
  options,
  headers,
  httpClient: localHttpClient,
}: UseHooksProps & {
  options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption) {
  const client = localHttpClient || httpClient;
  const combinedHeaders = { ...client?.defaultHeaders, ...headers };

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (data) => {
      return client
        ? client.patch(endpoint, data, combinedHeaders)
        : patch(endpoint, data, combinedHeaders);
    },
    ...globalOptions?.mutationOptions,
    ...options,
  });
}

// Hook to handle PUT API calls
export function usePutAPI<TRequest, TResponse>({
  endpoint,
  options,
  headers,
  httpClient: localHttpClient,
}: UseHooksProps & {
  options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption) {
  const client = localHttpClient || httpClient;
  const combinedHeaders = { ...client?.defaultHeaders, ...headers };

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async (data) => {
      return client
        ? client.put(endpoint, data, combinedHeaders)
        : put(endpoint, data, combinedHeaders);
    },
    ...globalOptions?.mutationOptions,
    ...options,
  });
}

// Hook to handle DELETE API calls
export function useDeleteAPI<TRequest, TResponse>({
  endpoint,
  options,
  headers,
  httpClient: localHttpClient,
}: UseHooksProps & {
  options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption) {
  const client = localHttpClient || httpClient;
  const combinedHeaders = { ...client?.defaultHeaders, ...headers };

  return useMutation<TResponse, unknown, TRequest>({
    mutationFn: async () => {
      return client
        ? client.delete(endpoint, combinedHeaders)
        : remove(endpoint, combinedHeaders);
    },
    ...globalOptions?.mutationOptions,
    ...options,
  });
}

// Hook to handle GET API calls with pagination (infinite scroll)
export function useGetInfiniteAPI<T>({
  endpoint,
  options,
  headers,
  hasParams,
  httpClient: localHttpClient,
}: UseHooksProps & { options?: UseInfiniteQueryOptions<T> } & {
  hasParams?: boolean;
} & HttpClientOption) {
  const client = localHttpClient || httpClient;
  const combinedHeaders = { ...client?.defaultHeaders, ...headers };

  return useInfiniteQuery<T>(
    [endpoint],
    async ({ pageParam = 1 }) => {
      // Construct endpoint based on whether it already has query parameters
      const formatEndpoint = `${endpoint}${
        hasParams ? "&" : "?"
      }page=${pageParam}`;
      return client
        ? client.get(formatEndpoint, combinedHeaders)
        : get(formatEndpoint, combinedHeaders);
    },
    { ...globalOptions?.infiniteQueryOptions, ...options }
  );
}
