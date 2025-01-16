import colors from "@constants/colors";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";
import styled from "styled-components";

const {
  blue: { text },
  white,
} = colors["rest-countries"];

type TDetail = {
  name: string;
  value: string | number;
};

const DetailsList = ({ details }: { details: TDetail[] }) => {
  const { theme } = useDarkModeContext();
  return (
    <List $theme={theme}>
      {details.map(({ name, value }) => (
        <li key={name}>
          <p>
            <span className="detail-key">{name}:</span>
            <span>{renderValue(value)}</span>
          </p>
        </li>
      ))}
    </List>
  );
};

export default DetailsList;

const renderValue = (value: string | number) => {
  if (typeof value === "number") {
    return value.toLocaleString();
  } else {
    return value;
  }
};

const List = styled.ul<{ $theme: TContextTheme }>`
  margin: 0;
  padding: 24px 0;
  list-style-type: none;
  display: block;

  p {
    display: inline-flex;
    gap: 4px;
    align-items: flex-start;
    margin: 2px 0;
    color: ${(props) => (props.$theme === "light" ? text : white)};
  }

  span {
    text-transform: capitalize;
  }

  .detail-key {
    font-weight: 700;
  }
`;
