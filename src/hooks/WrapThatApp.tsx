import React, { createContext, useState, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GlobalOptions, HttpClientFunctions } from "./setup";

interface GlobalContextProps {
  queryClient: QueryClient;
  globalOptions: GlobalOptions | null;
  httpClient: HttpClientFunctions | null;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

interface WrapThatAppProps {
  children: React.ReactNode;
  queryClient: QueryClient;
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

// Custom hook to use this context
export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a WrapThatApp component"
    );
  }
  return context;
};
