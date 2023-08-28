import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions } from "react-query";
import { HttpClientOption, UseHooksProps } from "./setup";
export declare function useGetAPI<T>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseQueryOptions<T>;
} & HttpClientOption): import("react-query").UseQueryResult<T, unknown>;
export declare function usePostAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePatchAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePutAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useDeleteAPI<TRequest, TResponse>({ endpoint, options, headers, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseMutationOptions<TResponse, unknown, TRequest>;
} & HttpClientOption): import("react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useGetInfiniteAPI<T>({ endpoint, options, headers, hasParams, httpClient: localHttpClient, }: UseHooksProps & {
    options?: UseInfiniteQueryOptions<T>;
} & {
    hasParams?: boolean;
} & HttpClientOption): import("react-query").UseInfiniteQueryResult<T, unknown>;
//# sourceMappingURL=useEasyHook.d.ts.map