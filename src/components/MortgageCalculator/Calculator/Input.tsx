import React, { HTMLProps } from "react";
import { HelperText, InputLabel } from "./atoms";
import styled from "styled-components";
import colors from "@constants/colors";

const { primary, neutral } = colors["mortgage-calculator"];

type TIconPosition = "start" | "end";
type TIcon = {
  position: TIconPosition;
  component: React.ReactNode;
};

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: TIcon;
  fullWidth?: boolean;
}

const Input = ({
  label,
  error = "",
  fullWidth = false,
  icon,
  ...props
}: InputProps) => {
  const isError = Boolean(error);
  return (
    <Container $fullWidth={fullWidth}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <InputContainer $isError={isError}>
        {icon?.position === "start" && (
          <StyledIcon $isError={isError}>{icon.component}</StyledIcon>
        )}
        <StyledInput name={label} {...props} />
        {icon?.position === "end" && (
          <StyledIcon $isError={isError}>{icon.component}</StyledIcon>
        )}
      </InputContainer>

      {isError && <HelperText $isError={isError}>{error}</HelperText>}
    </Container>
  );
};

export default Input;

const Container = styled.div<{ $fullWidth: boolean }>`
  margin-block: 8px;
  width: ${(props) => (props.$fullWidth ? "100%" : "50%")};

  @media (max-width: 640px) {
    width: 100$;
  }
`;

const InputContainer = styled.div<{
  $isError: boolean;
}>`
  border: 1px solid ${neutral.slate[300]};
  border-radius: 4px;
  box-sizing: border-box;
  overflow: hidden;
  margin: 8px 0 0;
  width: 100%;
  display: inline-flex;

  ${(props) =>
    props.$isError
      ? `
          border-color: ${primary.red};
        `
      : `
          &:hover {
            border-color: ${neutral.slate[700]};
          }
          
        `}
`;

const StyledInput = styled.input`
  font-size: 0.9rem;
  line-height: 1rem;
  padding: 8px;
  border: none;
  flex-grow: 1;

  &:focus-visible {
    outline: none;
  }
`;

const StyledIcon = styled.div<{ $isError: boolean }>`
  background-color: ${(props) =>
    props.$isError ? primary.red : neutral.slate[100]};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  line-height: 1rem;
  color: ${(props) => (props.$isError ? neutral.white : neutral.slate[700])};
  min-width: 16px;
  height: 16px;
`;
