import { useQuery } from "react-query";
import { TCountryFilters } from "../types";

type TQueryParams = Record<TCountryFilters, string>;

const API_URL = "https://restcountries.com/v3.1";

const fetchCountries = (params?: TQueryParams) => {
  let suffix = "/all";
  if (params?.name) {
    suffix = `/name/${params.name}`;
  } else if (params?.region) {
    suffix = `/region/${params.region}`;
  }

  return async () => {
      const response = await fetch(API_URL + suffix);
      const data = await response.json();
      return data;
  };
};

const useFetchCountries = (params?: TQueryParams) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["all-countries", params?.name, params?.region],
    queryFn: fetchCountries(params),
  });

  const arrayData = Array.isArray(data) ? data : [];

  return {
    data: arrayData,
    isLoading,
    isError,
  };
};

export default useFetchCountries;
