import styled from "styled-components";
import { TProductItem } from "./types";
import { formatPrice } from "@utils/index";
import CloseIcon from "@assets/ProductListWithCart/icons/icon-remove-item.svg?react";
import { Container } from "./CartItem.atoms";

interface CartItemProps extends TProductItem {
  onRemove: VoidFunction;
}

const CartItem = ({ name, quantity, price, onRemove }: CartItemProps) => {
  return (
    <Container>
      <div>
        <p>{name}</p>
        <p>
          <mark>{quantity}x</mark>
          <ItemPrice>
            &#x40; &#36;{formatPrice(price)}{" "}
            <strong>&#36;{formatPrice(price * quantity)}</strong>
          </ItemPrice>
        </p>
      </div>
      <Iconbutton onClick={onRemove}>
        <CloseIcon />
      </Iconbutton>
    </Container>
  );
};

export default CartItem;

const ItemPrice = styled.span`
  color: rgba(0, 0, 0, 0.7);

  strong {
    color: black;
    font-weight: 400;
  }
`;

const Iconbutton = styled.button`
  width: 18px;
  height: 18px;
  padding: 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.6);
  transition: border 0.1s ease;
  background: inherit;

  svg > path {
    fill: rgba(0, 0, 0, 0.6);
    transition: fill 0.1s ease;
  }

  &:hover {
    border-color: black;
    cursor: pointer;
  }

  &:hover > svg > path {
    fill: black;
  }
`;
