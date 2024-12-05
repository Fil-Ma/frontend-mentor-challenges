import { HTMLProps } from "react";
import styled from "styled-components";
import colors from "@constants/colors";

const { primary, neutral } = colors["mortgage-calculator"];

type TVariant = "primary" | "text";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: TVariant;
  type?: "button" | "submit" | "reset";
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  if (variant === "text") {
    return <TextButton {...props}>{children}</TextButton>;
  }
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
};

export default Button;

const PrimaryButton = styled.button`
  background-color: ${primary.lime};
  color: ${neutral.slate[900]};
  border-radius: 32px;
  border: none;
  padding: 8px 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;

  &:hover {
    background-color: hsl(61, 70%, 70%);
    cursor: pointer;
  }
`;

const TextButton = styled.button`
  color: ${neutral.slate[500]};
  text-decoration: underline;
  text-decoration-color: ${neutral.slate[500]};
  font-size: 0.8rem;
  cursor: pointer;
  padding: 4px 8px;
  border: none;
  font-weight: 600;
  background-color: inherit;

  &:hover {
    color: ${neutral.slate[700]};
  }
`;
