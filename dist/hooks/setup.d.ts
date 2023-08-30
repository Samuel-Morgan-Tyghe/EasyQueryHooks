import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions, useInfiniteQuery as useTanstackInfinityQuery, useMutation as useTanstackMutation, useQuery as useTanstackQuery } from "@tanstack/react-query";
import { HttpClientParams } from "../API";
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
    get?: WithDataApi;
    post?: WithDataApi;
    patch?: WithDataApi;
    put?: WithDataApi;
    delete?: WithDataApi;
};
export declare let easyQueryHooksProps: EasyQueryHooksPropTypes | null;
export declare const setUpEasyQueryHooks: (easyQueryHooksArgs: EasyQueryHooksPropTypes) => void;
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=setup.d.ts.map