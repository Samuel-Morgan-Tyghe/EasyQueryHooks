import { ApiOptions, HttpClientParams } from "./types";
export default function api({ method, url, body, headers }: ApiOptions): Promise<any>;
export declare const get: ({ url, header }: HttpClientParams) => Promise<any>;
export declare const post: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const put: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const patch: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const remove: ({ url, data, header }: HttpClientParams) => Promise<any>;
export declare const getDefaultClient: (key: string) => ({ url, header }: HttpClientParams) => Promise<any>;
//# sourceMappingURL=API.d.ts.map