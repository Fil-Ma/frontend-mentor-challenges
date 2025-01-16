import colors from "@constants/colors";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";
import styled from "styled-components";
import DetailsList from "./DetailsElement";

const {
  blue: { dark, text },
  white,
} = colors["rest-countries"];

const CountryElement = ({
  data,
  onClick,
}: {
  data: any;
  onClick: VoidFunction;
}) => {
  const { theme } = useDarkModeContext();

  const details = [
    {
      name: "population",
      value: data.population.toLocaleString(),
    },
    {
      name: "region",
      value: data.region,
    },
    {
      name: "capital",
      value: data.capital?.[0],
    },
  ];

  return (
    <Container $theme={theme} onClick={onClick}>
      <Image src={data.flags.png} alt={data.flags.alt} />
      <div>
        <h2>{data.name.official}</h2>
        <DetailsList details={details} />
      </div>
    </Container>
  );
};

export default CountryElement;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.li<{ $theme: TContextTheme }>`
  background-color: ${(props) => (props.$theme === "light" ? white : dark)};
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-block: 16px;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;

  h2 {
    margin: 0;
    font-size: 1.3rem;
    line-height: 1.3rem;
    color: ${(props) => (props.$theme === "light" ? text : white)};
  }

  div {
    padding: 32px 24px;
  }
`;
