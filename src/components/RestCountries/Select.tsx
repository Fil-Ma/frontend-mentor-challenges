import colors from "@constants/colors";
import { ChangeEvent } from "react";
import styled from "styled-components";
import angleDown from "@assets/RestCountries/angle-down.svg?inline";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";

const { blue, gray, white } = colors["rest-countries"];

type Props<T> = {
  options: T[];
  value: T;
  onChange: (value: string) => void;
};

const Select = <T extends string>({ options, value, onChange }: Props<T>) => {
  const { theme } = useDarkModeContext();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };
  return (
    <CustomSelect $theme={theme} value={value} onChange={handleChange}>
      <option value="" disabled hidden>
        Filter By Region
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </CustomSelect>
  );
};

export default Select;

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
  },
};

const CustomSelect = styled.select<{ $theme: TContextTheme }>`
  width: 200px;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid ${(props) => colorsMap[props.$theme].border};
  border-radius: 4px;
  background-color: ${(props) => colorsMap[props.$theme].background};
  appearance: none;
  background-image: url("${angleDown}");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 16px;
  cursor: pointer;

  color: ${(props) => colorsMap[props.$theme].text};

  option:disabled {
    color: ${(props) => colorsMap[props.$theme].placeholder};
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &:hover {
    border-color: #888;
  }
`;
