import colors from "@constants/colors";
import { SectionElement } from "./layout.atoms";
import Input from "./Calculator/Input";
import styled from "styled-components";
import RadioForm from "./Calculator/RadioForm";
import Button from "./Calculator/Button";
import CalculatorIcon from "@assets/MortgageCalculator/icon-calculator.svg?react";
import { TPayment } from "./types";
import useCalculator from "./useCalculator";

const { neutral } = colors["mortgage-calculator"];

const Calculator = ({
  setPayment,
}: {
  setPayment: React.Dispatch<React.SetStateAction<TPayment>>;
}) => {
  const {
    radio,
    amount,
    term,
    rate,
    onInputChange,
    onSubmit,
    canReset,
    resetAll,
    errorElement,
  } = useCalculator((payment) => setPayment(payment));

  return (
    <SectionElement
      header={{
        title: "Mortgage Calculator",
        titleColor: neutral.slate[900],
        actions: canReset ? (
          <Button variant="text" onClick={resetAll}>
            Clear All
          </Button>
        ) : null,
      }}
    >
      <Input
        label="Mortgage Amount"
        icon={{ position: "start", component: <>&pound;</> }}
        type="number"
        value={amount}
        onChange={onInputChange("amount")}
        error={printError(errorElement["amount"])}
        fullWidth
      />
      <TermAndRateWrapper>
        <Input
          label="Mortgage Term"
          icon={{ position: "end", component: "years" }}
          type="number"
          value={term}
          onChange={onInputChange("term")}
          error={printError(errorElement["term"])}
        />
        <Input
          label="Interest Rate"
          icon={{ position: "end", component: <>&#37;</> }}
          type="number"
          value={rate}
          onChange={onInputChange("rate")}
          error={printError(errorElement["rate"])}
        />
      </TermAndRateWrapper>
      <RadioForm {...radio} error={printError(errorElement["radio"])} />
      <Button onClick={onSubmit}>
        <CalculatorIcon />
        <span>Calculate Repayments</span>
      </Button>
    </SectionElement>
  );
};

export default Calculator;

const TermAndRateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-evenly;

  @media (max-width: 640px) {
    display: block;
  }
`;

const printError = (isError: boolean) => {
  if (isError) return "This field is required";

  return "";
};
