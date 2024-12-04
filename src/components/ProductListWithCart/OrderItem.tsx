import { formatPrice } from "@utils/index";
import styled from "styled-components";
import { Container } from "./CartItem.atoms";
import { TProductItem } from "./types";
import { Image } from "./MenuItem.atoms";

const OrderItem = ({ name, quantity, price, image }: TProductItem) => {
  return (
    <Container>
      <Image src={image.thumbnail} alt={`${name}-thumbnail`} $width="48px" />
      <div style={{ flexGrow: 1 }}>
        <p>{name}</p>
        <p>
          <mark>{quantity}x</mark>
          <ItemPrice>&#x40; &#36;{formatPrice(price)} </ItemPrice>
        </p>
      </div>
      <p>
        <strong>&#36;{formatPrice(price * quantity)}</strong>
      </p>
    </Container>
  );
};

export default OrderItem;

const ItemPrice = styled.span`
  color: rgba(0, 0, 0, 0.7);

  strong {
    color: black;
    font-weight: 400;
  }
`;
