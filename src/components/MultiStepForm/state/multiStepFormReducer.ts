import { Dispatch } from "react";
import { IMultiStepForm } from "../types";

type TActions<T extends keyof IMultiStepForm> = {
  type: T;
  payload: Partial<IMultiStepForm[T]>;
};

export type TState = {
  state: IMultiStepForm;
  dispatch: Dispatch<TActions<keyof IMultiStepForm>>;
};

const multiStepFormReducer = <T extends keyof IMultiStepForm>(
  state: IMultiStepForm,
  action: TActions<T>,
) => {
  return {
    ...state,
    [action.type]: {
      ...state[action.type],
      ...action.payload,
    },
  };
};

export default multiStepFormReducer;
