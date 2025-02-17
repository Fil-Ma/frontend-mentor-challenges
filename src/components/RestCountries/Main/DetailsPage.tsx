import styled from "styled-components";
import DetailsList from "./DetailsElement";
import { TContextTheme } from "@contexts/DarkMode/types";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import colors from "@constants/colors";

const {
  blue: { text, dark },
  white,
} = colors["rest-countries"];

const DetailsPage = ({ data }: { data: any }) => {
  const { theme } = useDarkModeContext();

  const firstBlock = [
    {
      name: "native name",
      value: getPropertyFromObject(data.name.nativeName, "official"),
    },
    {
      name: "population",
      value: data.population,
    },
    {
      name: "region",
      value: data.region,
    },
    {
      name: "sub region",
      value: data.subregion || "",
    },
    {
      name: "capital",
      value: data.capital?.[0],
    },
  ];

  const secondBlock = [
    {
      name: "top level domain",
      value: data.tld,
    },
    {
      name: "currencies",
      value: getPropertyFromObject(data.currencies, "name"),
    },
    {
      name: "languages",
      value: Object.values(data.languages).join(", "),
    },
  ];
  return (
    <Container>
      <Image src={data.flags.png} alt={data.flags.alt} />
      <DetailsContainer $theme={theme}>
        <h2>{data.name.official}</h2>
        <div>
          <DetailsList details={firstBlock} />
          <DetailsList details={secondBlock} />
        </div>
        <Neighbours $theme={theme}>
          <p>Border&nbsp;Countries:</p>
          <div>
            {data.borders?.map((name: string) => {
              return (
                <NeighbourTag key={name} $theme={theme}>
                  {name}
                </NeighbourTag>
              );
            })}
          </div>
        </Neighbours>
      </DetailsContainer>
    </Container>
  );
};

export default DetailsPage;

const Neighbours = styled.div<{ $theme: TContextTheme }>`
  display: inline-flex;
  gap: 8px;
  align-items: flex-start;

  p {
    margin-top: 0;
    color: ${(props) => (props.$theme === "light" ? text : white)};
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    display: block;
  }
`;

const NeighbourTag = styled.p<{ $theme: TContextTheme }>`
  flex: 1;
  max-width: max-content;
  margin: 0;
  padding: 4px 20px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.$theme === "light" ? white : dark)};
  color: ${(props) => (props.$theme === "light" ? text : white)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 80px;
  padding-bottom: 72px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const Image = styled.img`
  width: 40%;
  height: auto;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DetailsContainer = styled.div<{ $theme: TContextTheme }>`
  flex-grow: 1;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    line-height: 1.5rem;
    color: ${(props) => (props.$theme === "light" ? text : white)};
  }

  & > div {
    display: flex;
    flex-direction: row;
    gap: 16px;

    ul {
      flex: 1;
    }
  }

  @media (max-width: 600px) {
    & > div {
      flex-direction: column;
      gap: 0;
    }
  }
`;

const getPropertyFromObject = (obj: object, key?: string) => {
  const firstValue = Object.values(obj)[0];
  if (key) {
    return firstValue?.[key] || "";
  } else {
    return firstValue || "";
  }
};
