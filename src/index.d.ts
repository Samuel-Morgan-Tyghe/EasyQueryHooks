// index.d.ts

import {
  MutationOptions,
  QueryClient,
  QueryClientProviderProps,
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
  useMutation as useTanstackMutation,
  useQuery as useTanstackQuery,
} from "@tanstack/react-query";

declare module "easy-query-hooks" {
  export type WrapThatAppProps = {
    children: React.ReactNode;
    queryClient: QueryClient;
    QueryClientProvider: React.ComponentType<QueryClientProviderProps>;
  };

  type HttpClientParams<T = any> = {
    url: string;
    data?: T;
    header: Record<string, string>;
  };
  // Type definition for API calls without data
  export type StandardApi = (params: HttpClientParams) => Promise<any>;

  // Type definition for API calls with data
  export type WithDataApi = (params: HttpClientParams) => Promise<any>;

  export type EasyQueryHooksPropTypes = {
    useQuery: typeof useTanstackQuery;
    useMutation: typeof useTanstackMutation;
    queryOptions?: UseQueryOptions<any>;
    mutationOptions?: UseMutationOptions<any, any, any>;
    infiniteQueryOptions?: UseInfiniteQueryOptions<any, any>;
    defaultHeaders?: Record<string, string>;
    get?: WithDataApi;
    post?: WithDataApi;
    patch?: WithDataApi;
    put?: WithDataApi;
    delete?: WithDataApi;
  };

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
  type ApiOptions = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    body?: unknown;
    headers?: Record<string, string>;
  };
}
