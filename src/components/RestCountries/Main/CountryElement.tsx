import colors from "@constants/colors";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";
import styled from "styled-components";

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
        <DetailsList $theme={theme}>
          {details.map(({ name, value }) => (
            <li key={name}>
              <p>
                <span className="detail-key">{name}:</span>
                <span>{value}</span>
              </p>
            </li>
          ))}
        </DetailsList>
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

const DetailsList = styled.ul<{ $theme: TContextTheme }>`
  margin: 0;
  padding: 24px 0;
  list-style-type: none;
  display: block;

  p {
    display: inline-flex;
    gap: 4px;
    align-items: center;
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
