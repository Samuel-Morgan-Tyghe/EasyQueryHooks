import { EasyQueryHooksPropTypes } from ".";

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
