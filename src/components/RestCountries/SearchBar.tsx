import styled from "styled-components";
import SearchIcon from "@assets/RestCountries/search-icon.svg?react";
import colors from "@constants/colors";
import React, { useState } from "react";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";

const { blue, gray, white } = colors["rest-countries"];

const SearchBar = ({
  submitHandler,
}: {
  submitHandler: (value: string) => void;
}) => {
  const [value, setValue] = useState("");
  const { theme } = useDarkModeContext();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitHandler(value);
  };

  return (
    <Form $theme={theme} onSubmit={handleSubmit}>
      <div>
        <SearchIcon />
      </div>
      <Input
        type="text"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        $theme={theme}
      />
    </Form>
  );
};

export default SearchBar;

const colorsMap = {
  light: {
    text: blue.text,
    background: white,
    border: gray.dark,
    placeholder: gray.dark,
  },
  dark: {
    text: white,
    background: blue.dark,
    border: "transparent",
    placeholder: white,
  }
}

const Form = styled.form<{ $theme: TContextTheme }>`
  display: flex;
  align-items: center;
  border: 2px solid ${(props) => colorsMap[props.$theme].border};
  border-radius: 4px;
  padding: 5px;
  width: 300px;
  background-color: ${(props) => colorsMap[props.$theme].background};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
  }

  svg > path {
    stroke: ${(props) => colorsMap[props.$theme].text};
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input<{ $theme: TContextTheme }>`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  padding: 5px;
  background: inherit;
  color: ${(props) => colorsMap[props.$theme].text};

  &::placeholder {
    color: ${(props) => colorsMap[props.$theme].placeholder};
  }

  &:focus {
    outline: none;
    border: none;
  }

  &:focus-within {
    border-color: #007bff;
  }
`;
