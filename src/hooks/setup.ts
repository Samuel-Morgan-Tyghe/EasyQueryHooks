import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

export type GlobalOptions = {
  queryOptions?: UseQueryOptions<any>;
  mutationOptions?: UseMutationOptions<any, any, any>;
  infiniteQueryOptions?: UseInfiniteQueryOptions<any, any>;
};

export let globalOptions: GlobalOptions | null = null;

export const setupGlobalOptions = (options: GlobalOptions) => {
  globalOptions = options;
};

// Type definitions for props passed to hooks
export type UseHooksProps = {
  endpoint: string; // API endpoint to call
  headers?: Record<string, string>; // Optional custom headers
};

// Type definition for API calls without data
export type StandardApi = (
  url: string,
  header: Record<string, string>
) => Promise<any>;

// Type definition for API calls with data
export type WithDataApi = (
  url: string,
  data: any,
  header: Record<string, string>
) => Promise<any>;

// Type definition for the HTTP client functions
export type HttpClientFunctions = {
  get: StandardApi;
  post: WithDataApi;
  patch: WithDataApi;
  put: WithDataApi;
  delete: StandardApi;
  defaultHeaders?: Record<string, string>; // Default headers that are used if none are provided in the call
};

// Variable to hold the global HTTP client
export let httpClient: HttpClientFunctions | null = null;

// Function to set up the global HTTP client
export const setupHTTPClient = ({
  client,
  defaultHeaders,
}: {
  client: HttpClientFunctions;
  defaultHeaders?: Record<string, string>;
}) => {
  httpClient = { ...client, defaultHeaders };
};

// Type definition for an optional HTTP client
export type HttpClientOption = {
  httpClient?: HttpClientFunctions;
};
