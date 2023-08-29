import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
import { HttpClientOption, UseHooksProps } from "./setup";
export declare function useGetAPI<T>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseQueryOptions<T>;
} & HttpClientOption): import("@tanstack/react-query").UseQueryResult<T, unknown>;
export declare function usePostAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePatchAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePutAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useDeleteAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useGetInfiniteAPI<T>({ endpoint, options, headers, hasParams, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseInfiniteQueryOptions<T>;
} & {
    hasParams?: boolean;
} & HttpClientOption): import("@tanstack/react-query").UseInfiniteQueryResult<T, unknown>;
//# sourceMappingURL=useEasyHook.d.ts.map