import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";
export type GlobalOptions = {
    queryOptions?: UseQueryOptions<any>;
    mutationOptions?: UseMutationOptions<any, any, any>;
    infiniteQueryOptions?: UseInfiniteQueryOptions<any, any>;
};
export declare let globalOptions: GlobalOptions | null;
export declare const setupGlobalOptions: (options: GlobalOptions) => void;
export type UseHooksProps = {
    endpoint: string;
    headers?: Record<string, string>;
};
export type StandardApi = (url: string, header: Record<string, string>) => Promise<any>;
export type WithDataApi = (url: string, data: any, header: Record<string, string>) => Promise<any>;
export type HttpClientFunctions = {
    get: StandardApi;
    post: WithDataApi;
    patch: WithDataApi;
    put: WithDataApi;
    delete: StandardApi;
    defaultHeaders?: Record<string, string>;
};
export declare let httpClient: HttpClientFunctions | null;
export declare const setupHTTPClient: (client: HttpClientFunctions, defaultHeaders?: Record<string, string>) => void;
export type HttpClientOption = {
    httpClient?: HttpClientFunctions;
};
//# sourceMappingURL=setup.d.ts.map