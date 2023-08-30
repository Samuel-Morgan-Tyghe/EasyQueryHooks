import React from "react";
import { QueryClient, QueryClientProviderProps } from "@tanstack/react-query";
import { GlobalOptions, HttpClientFunctions } from "./hooks/setup";
interface GlobalContextProps {
    globalOptions?: GlobalOptions | null;
    httpClient?: HttpClientFunctions | null;
}
interface WrapThatAppProps {
    children: React.ReactNode;
    queryClient: QueryClient;
    QueryClientProvider: React.ComponentType<QueryClientProviderProps>;
    globalOptions?: GlobalOptions | null;
    httpClient?: HttpClientFunctions | null;
}
export declare const WrapThatApp: React.FC<WrapThatAppProps>;
export declare const useGlobalContext: () => GlobalContextProps;
export {};
//# sourceMappingURL=WrapThatApp.d.ts.map