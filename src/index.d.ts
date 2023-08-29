// index.d.ts

declare module "easy-query-hooks" {
  import {
    UseInfiniteQueryOptions,
    UseMutationOptions,
    UseQueryOptions,
  } from "react-query";

  type HttpClientFunctions = {
    get: (url: string, header: Record<string, string>) => Promise<any>;
    post: (
      url: string,
      data: any,
      header: Record<string, string>
    ) => Promise<any>;
    patch: (
      url: string,
      data: any,
      header: Record<string, string>
    ) => Promise<any>;
    put: (
      url: string,
      data: any,
      header: Record<string, string>
    ) => Promise<any>;
    delete: (url: string, header: Record<string, string>) => Promise<any>;
    defaultHeaders?: Record<string, string>;
  };

  interface UseHooksProps {
    endpoint: string;
    headers?: Record<string, string>;
  }

  interface HttpClientOption {
    httpClient?: HttpClientFunctions;
  }

  export function useGetAPI<T>(
    props: UseHooksProps & { options?: UseQueryOptions<T> } & HttpClientOption
  ): any;

  export function usePostAPI<TRequest, TResponse>(
    props: UseHooksProps & {
      options?: UseMutationOptions<TResponse, unknown, TRequest>;
    } & HttpClientOption
  ): any;

  export function usePatchAPI<TRequest, TResponse>(
    props: UseHooksProps & {
      options?: UseMutationOptions<TResponse, unknown, TRequest>;
    } & HttpClientOption
  ): any;

  export function usePutAPI<TRequest, TResponse>(
    props: UseHooksProps & {
      options?: UseMutationOptions<TResponse, unknown, TRequest>;
    } & HttpClientOption
  ): any;

  export function useDeleteAPI<TRequest, TResponse>(
    props: UseHooksProps & {
      options?: UseMutationOptions<TResponse, unknown, TRequest>;
    } & HttpClientOption
  ): any;

  export function useGetInfiniteAPI<T>(
    props: UseHooksProps & { options?: UseInfiniteQueryOptions<T> } & {
      hasParams?: boolean;
    } & HttpClientOption
  ): any;

  export function setupGlobalOptions(options: any): void;
  export function setupHTTPClient(
    client: HttpClientFunctions,
    defaultHeaders?: Record<string, string>
  ): void;
}
