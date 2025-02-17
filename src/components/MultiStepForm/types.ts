import React from "react";

export enum STEPS {
  YOUR_INFO = "yourInfo",
  SELECT_PLAN = "selectPlan",
  ADD_ONS = "addOns",
  SUMMARY = "summary",
  THANK_YOU = "thankYou",
}

export type TBaseStepProps = {
  onChangeStep: (s: STEPS) => void;
};

type TStep = {
  label: string;
  Component: React.FC<TBaseStepProps>;
};

export type TSteps = Record<STEPS, TStep>;

export type TPlan = "arcade" | "advanced" | "pro";
export type TBilling = "monthly" | "yearly";
export enum TAddOns {
  ONLINE_STORAGE = "online-storage",
  LARGER_STORAGE = "larger-storage",
  CUSTOMIZABLE_PROFILE = "customizable-profile",
}

export interface IMultiStepForm {
  [STEPS.YOUR_INFO]: {
    name: string;
    email: string;
    phone: string;
  };
  [STEPS.SELECT_PLAN]: {
    plan: TPlan;
    billing: TBilling;
  };
  [STEPS.ADD_ONS]: {
    services: Set<TAddOns>;
  };
}

export type TPlanCardAttributes = {
  imageSrc: string;
  name: TPlan;
  price: Record<TBilling, number>;
};

export type TService = {
  name: TAddOns;
  title: string;
  description: string;
  checked: boolean;
  price: Record<TBilling, number>;
};
