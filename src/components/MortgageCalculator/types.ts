export type TPayment = {
  monthly: number;
  total: number;
};

export enum RadioValues {
  REPAYMENT = "repayment",
  INTEREST_ONLY = "interest-only",
}

export type TRadioOption<T extends string> = {
  radioValue: T;
  radioLabel: string;
};

export type TCalculatorInputs = "amount" | "term" | "rate" | "radio";
