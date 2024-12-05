import { useState } from "react";
import {
  RadioValues,
  TCalculatorInputs,
  TPayment,
  TRadioOption,
} from "./types";

const radioOptions: TRadioOption<RadioValues>[] = [
  {
    radioValue: RadioValues.REPAYMENT,
    radioLabel: "Repayment",
  },
  {
    radioValue: RadioValues.INTEREST_ONLY,
    radioLabel: "Interest Only",
  },
];

const useCalculator = (updatePayment: (payment: TPayment) => void) => {
  const [radio, setRadio] = useState<RadioValues | "">("");
  const [amount, setAmount] = useState(0);
  const [term, setTerm] = useState(0);
  const [rate, setRate] = useState(0);
  const [errorElement, setErrorElement] = useState<
    Record<TCalculatorInputs, boolean>
  >({
    amount: false,
    term: false,
    rate: false,
    radio: false,
  });

  const onRadioChange =
    (radiovalue: RadioValues) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setRadio(radiovalue);
      }
    };

  const onInputChange =
    (input: Omit<TCalculatorInputs, "radio">) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(event.target.value);
      if (Number.isNaN(value) || value < 0) return;

      switch (input) {
        case "term":
          setTerm(value);
          break;
        case "rate":
          setRate(value);
          break;
        case "amount":
        default:
          setAmount(value);
          break;
      }
    };

  const canReset =
    Boolean(amount) || Boolean(term) || Boolean(rate) || Boolean(radio);

  const resetAll = () => {
    setAmount(0);
    setTerm(0);
    setRate(0);
    setRadio("");
  };

  const checkErrors = () => {
    setErrorElement({
      amount: !amount,
      term: !term,
      rate: !rate,
      radio: !radio,
    });
    return !amount || !term || !rate || !radio;
  };

  const onSubmit = () => {
    const isError = checkErrors();
    if (isError) return;

    updatePayment(calculateMortgage(amount, term, rate));
  };

  return {
    radio: {
      value: radio,
      onChange: onRadioChange,
      options: radioOptions,
    },
    amount,
    term,
    rate,
    onInputChange,
    onSubmit,
    canReset,
    resetAll,
    errorElement,
  };
};

export default useCalculator;

function calculateMortgage(amount: number, years: number, rate: number) {
  const monthlyRate = rate / 100 / 12;
  const totalPayments = years * 12;

  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  return {
    monthly: monthlyPayment,
    total: monthlyPayment * 12,
  };
}
