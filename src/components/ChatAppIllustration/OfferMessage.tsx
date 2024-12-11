import colors from "@constants/colors";
import styled from "styled-components";
import { TSender } from "./types";

const { gradient, white, lightMagenta } = colors["chat-app-illustration"];

export interface OfferMessageProps {
  offer: { details: string; price: number };
  sender: TSender;
}

const OfferMessage = ({ offer, sender }: OfferMessageProps) => {
  return (
    <Wrapper $sender={sender}>
      <Details>{offer.details}</Details>
      <Price>&#36;{offer.price}</Price>
    </Wrapper>
  );
};

export default OfferMessage;

const Wrapper = styled.div<{ $sender: TSender }>`
  background: linear-gradient(
    to right,
    ${gradient.magenta},
    ${gradient.violet}
  );
  border-radius: 12px;

  max-width: 70%;
  ${(props) => props.$sender === "source" && "margin-left: auto;"}
  ${(props) =>
    props.$sender === "source"
      ? "border-bottom-right-radius: 2px;"
      : "border-bottom-left-radius: 2px;"}
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    color: ${white};
  }
`;

const Details = styled.p`
  font-size: 0.8rem;
  line-height: 16px;
  font-weight: 100;
  display: inline-flex;
  gap: 12px;
  align-items: center;

  &::before {
    content: "";
    display: block;
    width: 14px;
    height: 14px;
    border: 1px solid ${lightMagenta};
    border-radius: 50%;
  }
`;

const Price = styled.p`
  font-weight: 500;
  padding-right: 8px;
`;
