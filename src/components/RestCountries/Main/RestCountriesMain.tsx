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
import BackButton from "./BackButton";
import EmptyState from "../EmptyState";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const RestCountriesMain = () => {
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const { data, isLoading } = useFetchCountries({
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

  const handleGoBack = () => {
    setSearch("");
    setRegion("");
    setSelectedCountry(null);
  };

  const dataIsEmpty = data.length === 0

  return (
    <Main>
      {isLoading && <LoadingSpinner />}

      <HiddenComponent hidden={!!selectedCountry}>
        <ActionsBar>
          <SearchBar submitHandler={setFilter("name")} />
          <Select
            value={region}
            onChange={setFilter("region")}
            options={regions}
          />
        </ActionsBar>
      </HiddenComponent>
      <BackButton hidden={!selectedCountry} onClick={handleGoBack} />

      {dataIsEmpty && <EmptyState />}

      <HiddenComponent hidden={dataIsEmpty || isLoading}>
        {!selectedCountry ? (
          <CountryList>
            {(data || []).map((el: any) => (
              <CountryElement
                key={el.name.official}
                data={el}
                onClick={() => setSelectedCountry(el)}
              />
            ))}
          </CountryList>
        ) : (
          <DetailsPage data={selectedCountry} />
        )}
      </HiddenComponent>
    </Main>
  );
};

export default RestCountriesMain;

const Main = styled.main`
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
