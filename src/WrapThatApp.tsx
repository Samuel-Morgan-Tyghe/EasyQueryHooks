import { QueryClient, QueryClientProviderProps } from "@tanstack/react-query";
import React from "react";

type WrapThatAppProps = {
  children: React.ReactNode;
  queryClient: QueryClient;
  QueryClientProvider: React.ComponentType<QueryClientProviderProps>;
};

export const WrapThatApp: React.FC<WrapThatAppProps> = ({
  children,
  queryClient,
  QueryClientProvider,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
