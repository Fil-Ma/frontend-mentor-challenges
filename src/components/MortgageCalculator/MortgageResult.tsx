import colors from "@constants/colors";
import { SectionElement } from "./layout.atoms";
import { TPayment } from "./types";
import EmptyState from "./MortgageResult/EmptyState";
import PaymentResult from "./MortgageResult/PaymentResult";

const { neutral } = colors["mortgage-calculator"];

const MortgageResult = ({ payment }: { payment: TPayment }) => {
  const isEmpty = !payment.monthly || !payment.total;
  return (
    <SectionElement
      header={{
        title: isEmpty ? "" : "Your results",
        titleColor: neutral.white,
      }}
      backgroundColor="hsl(202, 55%, 21%)"
      customStyles={{
        "@media (min-width: 640px)": {
          borderBottomLeftRadius: "50px",
        },
      }}
    >
      {isEmpty ? <EmptyState /> : <PaymentResult payment={payment} />}
    </SectionElement>
  );
};

export default MortgageResult;
