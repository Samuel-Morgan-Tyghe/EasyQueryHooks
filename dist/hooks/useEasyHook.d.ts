import { MutationOptions, UseInfiniteQueryOptions, UseQueryOptions } from "@tanstack/react-query";
import { WithDataApi } from "./setup";
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
export declare function useGetAPI<T>({ url, options, headers: localHeaders, httpClient: localHttpClient, }: UseHooksProps<T>): import("@tanstack/react-query").UseQueryResult<T, unknown>;
export declare function usePostAPI<TRequest, TResponse>({ url, options, headers: localHeaders, httpClient: localHttpClient, }: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePatchAPI<TRequest, TResponse>({ url, options, headers: localHeaders, httpClient: localHttpClient, }: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePutAPI<TRequest, TResponse>({ url, options, headers: localHeaders, httpClient: localHttpClient, }: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useDeleteAPI<TRequest, TResponse>({ url, options, headers: localHeaders, httpClient: localHttpClient, }: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useGetInfiniteAPI<T>({ url, options, headers: localHeaders, hasParams, httpClient: localHttpClient, }: UseInfinityHooksProps<T>): import("@tanstack/react-query").UseInfiniteQueryResult<T, unknown>;
export {};
//# sourceMappingURL=useEasyHook.d.ts.map