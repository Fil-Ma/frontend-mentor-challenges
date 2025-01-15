import RestCountriesHeader from "@components/RestCountries/Header/RestCountriesHeader";
import RestCountriesMain from "@components/RestCountries/Main/RestCountriesMain";
import DarkModeContextProvider from "@contexts/DarkMode/DarkModeContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const RestCountries = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeContextProvider>
        <RestCountriesHeader />
        <RestCountriesMain />
      </DarkModeContextProvider>
    </QueryClientProvider>
  );
};

export default RestCountries;
