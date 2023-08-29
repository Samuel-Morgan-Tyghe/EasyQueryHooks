export {
  useGetAPI,
  usePostAPI,
  usePutAPI,
  usePatchAPI,
  useDeleteAPI,
} from "./hooks/useEasyHook";

export {
  setupGlobalOptions,
  setupHTTPClient,
  globalOptions,
  httpClient,
} from "./hooks/setup";

// Exporting WrapThatApp component
export { WrapThatApp, useGlobalContext } from "./WrapThatApp";
