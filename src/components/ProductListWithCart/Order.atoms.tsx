import colors from "@constants/colors";
import { formatPrice } from "@utils/index";
import styled from "styled-components";

const OrderTotal = ({ total }: { total: number }) => {
  return (
    <Wrapper>
      <p>Order Total</p>
      <strong>&#36;{formatPrice(total)}</strong>
    </Wrapper>
  );
};

export default OrderTotal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: ${colors["product-list-with-cart"].red};
  color: white;
  border: none;
  border-radius: 32px;
  width: 100%;
  margin-top: 16px;
  cursor: pointer;
`;
