import styled from "styled-components";
import { TPayment } from "../types";
import colors from "@constants/colors";
import { formatPrice } from "@utils/index";
import { InfoParagraph, HighlitedParagraph } from "./atoms";

const { primary, neutral } = colors["mortgage-calculator"];

const PaymentResult = ({ payment }: { payment: TPayment }) => {
  return (
    <div>
      <InfoParagraph>
        Your result are shown belowe based on the information you provided. To
        adjust the results, edit the form and click &quot;calculate
        repayments&quot; again.
      </InfoParagraph>

      <StyledResult>
        <InfoParagraph>Your monthly repayments</InfoParagraph>
        <MonthlyPayment>&pound;{formatPrice(payment.monthly)}</MonthlyPayment>

        <Divider />

        <InfoParagraph>Total you'll repay over the term</InfoParagraph>
        <HighlitedParagraph>
          &pound;{formatPrice(payment.total)}
        </HighlitedParagraph>
      </StyledResult>
    </div>
  );
};

export default PaymentResult;

const StyledResult = styled.div`
  border-top: 3px solid ${primary.lime};
  border-radius: 8px;
  background-color: ${neutral.slate[900]};
  padding: 16px;
  margin-top: 24px;
`;

const MonthlyPayment = styled.p`
  color: ${primary.lime};
  font-size: 2.4rem;
  line-height: 2.4rem;
  font-weight: 500;
  margin-block: 0.5rem 1.5rem;
`;
const Divider = styled.hr`
  border: 1px solid ${neutral.slate[100]};
  opacity: 0.2;
  width: 100%;
  margin: 16px 0;
`;
