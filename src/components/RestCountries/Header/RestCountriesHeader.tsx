import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import styled from "styled-components";
import MoonIcon from "@assets/RestCountries/moon-icon.svg?react";
import SunIcon from "@assets/RestCountries/sun-icon.svg?react";
import { TContextTheme } from "@contexts/DarkMode/types";
import colors from "@constants/colors";

const {
  blue: { dark, text },
  white,
} = colors["rest-countries"];

const RestCountriesHeader = () => {
  const { theme, toggleTheme } = useDarkModeContext();
  return (
    <Header $theme={theme}>
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <>
            <MoonIcon />
            <span>Dark Mode</span>
          </>
        ) : (
          <>
            <SunIcon />
            <span>Light Mode</span>
          </>
        )}
      </button>
    </Header>
  );
};

export default RestCountriesHeader;

const Header = styled.header<{ $theme: TContextTheme }>`
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Nunito Sans", sans-serif;

  color: ${(props) => (props.$theme === "light" ? text : white)};
  background-color: ${(props) => (props.$theme === "light" ? white : dark)};

  h1 {
    margin: 0;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  button {
    border: none;
    padding: 4px 8px;
    background: inherit;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    color: inherit;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    padding: 32px 16px;
  }
`;
