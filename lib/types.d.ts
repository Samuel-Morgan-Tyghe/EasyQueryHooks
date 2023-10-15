/// <reference types="react" />
import { MutationOptions, QueryClient, QueryClientProviderProps, UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions, useInfiniteQuery as useTanstackInfinityQuery, useMutation as useTanstackMutation, useQuery as useTanstackQuery } from "@tanstack/react-query";
export type WrapThatAppProps = {
    children: React.ReactNode;
    queryClient: QueryClient;
    QueryClientProvider: React.ComponentType<QueryClientProviderProps>;
};
export type HttpClientParams<T = any> = {
    url: string;
    data?: T;
    header: Record<string, string>;
};
export type StandardApi = (params: HttpClientParams) => Promise<any>;
export type WithDataApi = (params: HttpClientParams) => Promise<any>;
export type EasyQueryHooksPropTypes = {
    useMutation: typeof useTanstackMutation;
    useQuery: typeof useTanstackQuery;
    useInfiniteQuery: typeof useTanstackInfinityQuery;
    defaultHeaders?: Record<string, string>;
    queryOptions?: UseQueryOptions<any>;
    mutationOptions?: UseMutationOptions<any, any, any>;
    infiniteQueryOptions?: UseInfiniteQueryOptions<any, any>;
    prefixUrl?: string;
    get?: WithDataApi;
    post?: WithDataApi;
    patch?: WithDataApi;
    put?: WithDataApi;
    delete?: WithDataApi;
};
type baseUseQueryProps = {
    url: string;
    showPrefix?: boolean;
    headers?: Record<string, string>;
    httpClient?: WithDataApi;
};
export type UseHooksProps<T> = {
    options?: UseQueryOptions<T>;
    headers?: Record<string, string>;
} & baseUseQueryProps;
export type UseInfinityHooksProps<T> = {
    options?: UseInfiniteQueryOptions<T>;
    hasParams?: boolean;
} & baseUseQueryProps;
export type UseMutateHooksProps<TRequest, TResponse> = {
    options?: MutationOptions<TResponse, unknown, TRequest, unknown>;
    httpClient?: WithDataApi;
} & baseUseQueryProps;
export type ApiOptions = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    body?: unknown;
    headers?: Record<string, string>;
};
export {};
