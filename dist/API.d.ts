type ApiOptions = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    url: string;
    body?: unknown;
    headers?: Record<string, string>;
};
export type HttpClientParams<T = any> = {
    url: string;
    data?: T;
    header: Record<string, string>;
};
export default function api({ method, url, body, headers }: ApiOptions): Promise<any>;
export declare const get: ({ url, header }: HttpClientParams) => Promise<any>;
export declare const post: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const put: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const patch: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const remove: ({ url, data, header }: HttpClientParams) => Promise<any>;
export {};
//# sourceMappingURL=API.d.ts.map