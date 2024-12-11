import styled from "styled-components";
import { TSender } from "./types";
import colors from "@constants/colors";

const { violet, white } = colors["chat-app-illustration"];

export interface TextMessageProps {
  text: string;
  sender: TSender;
}

const TextMessage = ({ text, sender }: TextMessageProps) => {
  return <Wrapper $sender={sender}>{text}</Wrapper>;
};

export default TextMessage;

const Wrapper = styled.p<{ $sender: TSender }>`
  background-color: ${(props) =>
    props.$sender === "source" ? white : "hsl(276, 20%, 90%)"};
  border-radius: 12px;
  margin: 0;
  font-size: 0.8rem;
  line-height: 0.8rem;
  padding: 8px;
  color: ${(props) =>
    props.$sender === "source" ? violet.desaturated : violet.moderate};

  max-width: 60%;
  ${(props) => props.$sender === "source" && "margin-left: auto;"}
`;
