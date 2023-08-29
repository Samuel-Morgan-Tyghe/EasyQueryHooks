import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, useState } from "react";
import { GlobalOptions, HttpClientFunctions } from "./setup"; // Add this import

interface WrapThatAppProps {
  children: React.ReactNode;
  queryClient: QueryClient;
}
interface GlobalContextProps {
  queryClient: QueryClient;
  globalOptions: GlobalOptions | null;
  httpClient: HttpClientFunctions | null;
}

export const WrapThatApp: React.FC<WrapThatAppProps> = ({
  children,
  queryClient,
}) => {
  const [globalOptions, setGlobalOptions] = useState<GlobalOptions | null>(
    null
  );
  const [httpClient, setHttpClient] = useState<HttpClientFunctions | null>(
    null
  );
  const GlobalContext = createContext<GlobalContextProps | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider
        value={{ queryClient, globalOptions, httpClient }}
      >
        {children}
      </GlobalContext.Provider>
    </QueryClientProvider>
  );
};
