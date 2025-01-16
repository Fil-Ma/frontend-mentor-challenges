import HiddenComponent from "@components/HiddenComponent";
import React from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@assets/RestCountries/arrow-left.svg?react";
import { TContextTheme } from "@contexts/DarkMode/types";
import colors from "@constants/colors";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";

const {
  blue: { dark, text },
  white,
} = colors["rest-countries"];

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  hidden: boolean;
}

const BackButton = ({ hidden, ...props }: Props) => {
  const { theme } = useDarkModeContext();
  return (
    <HiddenComponent hidden={hidden}>
      <StyledButton {...props} $theme={theme}>
        <ArrowLeftIcon />
        <span>Back</span>
      </StyledButton>
    </HiddenComponent>
  );
};

const StyledButton = styled.button<{ $theme: TContextTheme }>`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 24px;
  margin-block: 32px 64px;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => (props.$theme === "light" ? white : dark)};
  color: ${(props) => (props.$theme === "light" ? text : white)};

  svg > path {
    stroke: ${(props) => (props.$theme === "light" ? text : white)};
  }
`;

export default BackButton;
