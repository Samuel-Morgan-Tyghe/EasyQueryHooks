import { ApiOptions, EasyQueryHooksPropTypes, HttpClientParams, UseHooksProps, UseInfinityHooksProps, UseMutateHooksProps } from "./types";
export default function api({ method, url, body, headers }: ApiOptions): Promise<any>;
export declare const get: ({ url, header }: HttpClientParams) => Promise<any>;
export declare const post: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const put: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const patch: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const remove: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const getDefaultClient: (key: string) => ({ url, header }: HttpClientParams) => Promise<any>;
export declare let easyQueryHooksProps: EasyQueryHooksPropTypes | null;
export declare const setUpEasyQueryHooks: (easyQueryHooksArgs: EasyQueryHooksPropTypes) => void;
export declare function useGetAPI<T>({ url: localUrl, showPrefix, options, headers: localHeaders, httpClient: localHttpClient, }: UseHooksProps<T>): import("@tanstack/react-query").UseQueryResult<T, unknown>;
export declare function useGetInfiniteAPI<T>({ url: localUrl, showPrefix, options, headers: localHeaders, hasParams, httpClient: localHttpClient, }: UseInfinityHooksProps<T>): import("@tanstack/react-query").UseInfiniteQueryResult<T, unknown>;
export declare function usePostAPI<TRequest, TResponse>(props: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePatchAPI<TRequest, TResponse>(props: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function usePutAPI<TRequest, TResponse>(props: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
export declare function useDeleteAPI<TRequest, TResponse>(props: UseMutateHooksProps<TRequest, TResponse>): import("@tanstack/react-query").UseMutationResult<TResponse, unknown, TRequest, unknown>;
//# sourceMappingURL=index.d.ts.map