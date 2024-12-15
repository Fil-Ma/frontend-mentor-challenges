import colors from "@constants/colors";
import { HTMLProps } from "react";
import styled from "styled-components";

const { green, cyan, white } = colors["easy-bank"];

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
  border: none;
  background: linear-gradient(to right, ${green}, ${cyan});
  padding: 10px 20px;
  color: ${white};
  border-radius: 32px;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
