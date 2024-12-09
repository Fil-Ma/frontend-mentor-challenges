import { HTMLProps } from "react";
import styled, { css } from "styled-components";
import colors from "@constants/colors";
import { Styles } from "styled-components/dist/types";

const { neutral, gradient } = colors.blogr;

type TVariant = "contained" | "outlined" | "text";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  variant?: TVariant;
  type?: "button" | "submit" | "reset";
  customStyles?: Styles<object>;
}

const Button = ({
  variant = "contained",
  children,
  customStyles,
  ...props
}: ButtonProps) => {
  if (variant === "text") {
    return (
      <TextButton $customStyles={customStyles} {...props}>
        {children}
      </TextButton>
    );
  } else if (variant === "outlined") {
    return (
      <OutlinedButton $customStyles={customStyles} {...props}>
        {children}
      </OutlinedButton>
    );
  } else {
    return (
      <ContainedButton $customStyles={customStyles} {...props}>
        {children}
      </ContainedButton>
    );
  }
};

export default Button;

type ButtonBaseProps = { $customStyles?: Styles<object> };

const ContainedButton = styled.button<ButtonBaseProps>`
  background-color: ${neutral.white};
  color: ${gradient.red.light};
  border-radius: 32px;
  border: none;
  padding: 8px 12px;
  font-weight: 600;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: hsl(0, 0%, 80%);
    cursor: pointer;
  }

  ${(props) => props.$customStyles && css(props.$customStyles)}
`;

const OutlinedButton = styled.button<ButtonBaseProps>`
  background-color: inherit;
  color: ${neutral.white};
  border-radius: 32px;
  border: 1px solid ${neutral.white};
  padding: 8px 12px;
  font-weight: 600;
  transition:
    color 0.1s ease,
    background-color 0.1s ease;

  &:hover {
    background-color: ${neutral.white};
    color: ${gradient.red.light};
    cursor: pointer;
  }

  ${(props) => props.$customStyles && css(props.$customStyles)}
`;

const TextButton = styled.button<ButtonBaseProps>`
  color: ${neutral.white};
  background-color: inherit;
  cursor: pointer;
  padding: 8px 12px;
  border: none;
  font-weight: 600;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => props.$customStyles && css(props.$customStyles)}
`;
