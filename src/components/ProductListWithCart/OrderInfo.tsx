import styled from "styled-components";
import CarbonFreeIcon from "@assets/ProductListWithCart/icons/icon-carbon-neutral.svg?react";
import OrderTotal, { Button } from "./Order.atoms";

const OrderInfo = ({
  total,
  onSubmit,
}: {
  total: number;
  onSubmit: VoidFunction;
}) => {
  return (
    <div>
      <OrderTotal total={total} />
      <InfoBanner>
        <CarbonFreeIcon />
        This is a <strong>carbon-neutral</strong> delivery
      </InfoBanner>
      <Button onClick={onSubmit}>Confirm Order</Button>
    </div>
  );
};

export default OrderInfo;

const InfoBanner = styled.p`
  margin: 0 auto;
  font-size: 0.9rem;
  padding: 8px 16px;
  background-color: lightgray;
  text-align: center;
  border-radius: 8px;
  background-color: #f5f5f5;
  width: max-content;
  display: inline-flex;
  gap: 4px;
  align-items: center;
`;
