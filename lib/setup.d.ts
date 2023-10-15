import { EasyQueryHooksPropTypes } from "./types";
export declare let easyQueryHooksProps: EasyQueryHooksPropTypes | null;
export declare const setUpEasyQueryHooks: (easyQueryHooksArgs: EasyQueryHooksPropTypes) => void;
export type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
