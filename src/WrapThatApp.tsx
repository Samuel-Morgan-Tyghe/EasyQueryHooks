import React, { createContext, useState, useContext } from "react";
import { QueryClient, QueryClientProviderProps } from "@tanstack/react-query";
import { GlobalOptions, HttpClientFunctions } from "./hooks/setup";

interface GlobalContextProps {
  globalOptions?: GlobalOptions | null;
  httpClient?: HttpClientFunctions | null;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

interface WrapThatAppProps {
  children: React.ReactNode;
  queryClient: QueryClient;
  QueryClientProvider: React.ComponentType<QueryClientProviderProps>;
  globalOptions?: GlobalOptions | null;
  httpClient?: HttpClientFunctions | null;
}

export const WrapThatApp: React.FC<WrapThatAppProps> = ({
  children,
  queryClient,
  QueryClientProvider,
  globalOptions = {},
  httpClient = {},
}) => {
  console.log("Global context value:", { globalOptions, httpClient });
  console.log(GlobalContext);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContext.Provider value={{ globalOptions, httpClient }}>
        {children}
      </GlobalContext.Provider>
    </QueryClientProvider>
  );
};

// Custom hook to use this context
export const useGlobalContext = (): GlobalContextProps => {
  const context = useContext(GlobalContext);
  console.log("Received context:", context);

  if (context === null) {
    throw new Error(
      "useGlobalContext must be used within a WrapThatApp component. Make sure WrapThatApp wraps your component hierarchy."
    );
  }

  return context;
};
