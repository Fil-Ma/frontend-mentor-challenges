import colors from "@constants/colors";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";
import { useState } from "react";
import styled from "styled-components";
import DetailsPage from "./DetailsPage";
import LoadingSpinner from "@components/Loading/LoadingSpinner";
import useFetchCountries from "../api/useFetchCountries";
import CountryElement from "./CountryElement";
import { TCountryFilters } from "../types";
import HiddenComponent from "@components/HiddenComponent";
import SearchBar from "../SearchBar";
import Select from "../Select";

const {
  blue: { background },
  gray: { light },
} = colors["rest-countries"];

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const RestCountriesMain = () => {
  const { theme } = useDarkModeContext();
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const { data, isLoading, isError } = useFetchCountries({
    name: search,
    region,
  });

  const setFilter = (filterName: TCountryFilters) => (value: string) => {
    if (filterName === "name") {
      setSearch(value);
    } else if (filterName === "region") {
      setRegion(value);
    }
  };

  const hasData = !!data && Array.isArray(data);
  const showEmptyState = (!hasData && !isLoading) || isError;

  return (
    <Main $theme={theme}>
      {isLoading && <LoadingSpinner />}
      <ActionsBar>
        <SearchBar submitHandler={setFilter("name")} />
        <Select
          value={region}
          onChange={setFilter("region")}
          options={regions}
        />
      </ActionsBar>
      {showEmptyState && <p>data not available</p>}
      <HiddenComponent hidden={showEmptyState}>
        {!selectedCountry ? (
          <CountryList>
            {data?.map((el: any) => (
              <CountryElement
                key={el.name.official}
                data={el}
                onClick={() => setSelectedCountry(el)}
              />
            ))}
          </CountryList>
        ) : (
          <DetailsPage />
        )}
      </HiddenComponent>
    </Main>
  );
};

export default RestCountriesMain;

const Main = styled.main<{ $theme: TContextTheme }>`
  background-color: ${(props) =>
    props.$theme === "light" ? light : background};
  font-family: "Nunito Sans", sans-serif;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;

  @media (max-width: 600px) {
    padding: 32px 16px;
  }
`;

const CountryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
`;

const ActionsBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-block: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }
`;
