type ApiOptions = {
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    endpoint: string;
    body?: unknown;
    headers?: Record<string, string>;
};
export default function api({ method, endpoint, body, headers, }: ApiOptions): Promise<any>;
export declare const get: (endpoint: string, headers?: Record<string, string>) => Promise<any>;
export declare const post: (endpoint: string, body: unknown, headers?: Record<string, string>) => Promise<any>;
export declare const put: (endpoint: string, body: unknown, headers?: Record<string, string>) => Promise<any>;
export declare const patch: (endpoint: string, body: unknown, headers?: Record<string, string>) => Promise<any>;
export declare const remove: (endpoint: string, body: unknown, headers?: Record<string, string>) => Promise<any>;
export {};
//# sourceMappingURL=API.d.ts.map