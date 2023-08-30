import {
  UseInfiniteQueryOptions,
  UseMutationOptions,
  UseQueryOptions,
  useInfiniteQuery as useTanstackInfinityQuery,
  useMutation as useTanstackMutation,
  useQuery as useTanstackQuery,
} from "@tanstack/react-query";
import { HttpClientParams } from "../API";

// Type definition for API calls without data
export type StandardApi = (params: HttpClientParams) => Promise<any>;

// Type definition for API calls with data
export type WithDataApi = (params: HttpClientParams) => Promise<any>;

export type EasyQueryHooksPropTypes = {
  useMutation: typeof useTanstackMutation;
  useQuery: typeof useTanstackQuery;
  useInfiniteQuery: typeof useTanstackInfinityQuery;
  defaultHeaders?: Record<string, string>;
  queryOptions?: UseQueryOptions<any>;
  mutationOptions?: UseMutationOptions<any, any, any>;
  infiniteQueryOptions?: UseInfiniteQueryOptions<any, any>;
  get?: WithDataApi;
  post?: WithDataApi;
  patch?: WithDataApi;
  put?: WithDataApi;
  delete?: WithDataApi;
};

// variable to hold All the props passed to the setup function
export let easyQueryHooksProps: EasyQueryHooksPropTypes | null = null;

export const setUpEasyQueryHooks = (
  easyQueryHooksArgs: EasyQueryHooksPropTypes
) => {
  easyQueryHooksProps = easyQueryHooksArgs;
};

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};
