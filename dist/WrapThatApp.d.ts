import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { GlobalOptions, HttpClientFunctions } from "./hooks/setup";
interface GlobalContextProps {
    queryClient: QueryClient;
    globalOptions: GlobalOptions | null;
    httpClient: HttpClientFunctions | null;
}
interface WrapThatAppProps {
    children: React.ReactNode;
    queryClient: QueryClient;
}
export declare const WrapThatApp: React.FC<WrapThatAppProps>;
export declare const useGlobalContext: () => GlobalContextProps;
export {};
//# sourceMappingURL=WrapThatApp.d.ts.map