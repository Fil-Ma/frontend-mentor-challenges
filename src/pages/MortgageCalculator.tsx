import Calculator from "@components/MortgageCalculator/Calculator";
import {
  PageContainer,
  AppWrapper,
} from "@components/MortgageCalculator/layout.atoms";
import MortgageResult from "@components/MortgageCalculator/MortgageResult";
import { TPayment } from "@components/MortgageCalculator/types";
import { useState } from "react";

const MortgageCalculator = () => {
  const [payment, setPayment] = useState<TPayment>({
    monthly: 0,
    total: 0,
  });
  return (
    <PageContainer>
      <AppWrapper>
        <Calculator setPayment={setPayment} />
        <MortgageResult payment={payment} />
      </AppWrapper>
    </PageContainer>
  );
};

export default MortgageCalculator;
