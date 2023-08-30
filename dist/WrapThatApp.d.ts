import { QueryClient, QueryClientProviderProps } from "@tanstack/react-query";
import React from "react";
type WrapThatAppProps = {
    children: React.ReactNode;
    queryClient: QueryClient;
    QueryClientProvider: React.ComponentType<QueryClientProviderProps>;
};
export declare const WrapThatApp: React.FC<WrapThatAppProps>;
export {};
//# sourceMappingURL=WrapThatApp.d.ts.map