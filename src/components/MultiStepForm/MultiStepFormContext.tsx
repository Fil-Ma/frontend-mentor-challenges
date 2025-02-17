import React, { createContext, useContext, useReducer } from "react";
import { STEPS, TAddOns } from "./types";
import multiStepFormReducer, { TState } from "./state/multiStepFormReducer";

const defaultValues: TState["state"] = {
  [STEPS.YOUR_INFO]: {
    name: "",
    email: "",
    phone: "",
  },
  [STEPS.SELECT_PLAN]: {
    plan: "arcade",
    billing: "monthly",
  },
  [STEPS.ADD_ONS]: {
    services: new Set([TAddOns.ONLINE_STORAGE, TAddOns.LARGER_STORAGE]),
  },
};

const MultiStepFormContext = createContext<TState>({
  state: defaultValues,
  dispatch: () => undefined,
});

const MultiStepFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(multiStepFormReducer, defaultValues);
  return (
    <MultiStepFormContext.Provider value={{ state, dispatch }}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export default MultiStepFormProvider;

export const useMultiStepFormContext = () => {
  const context = useContext(MultiStepFormContext);
  return context;
};
