import RestCountriesHeader from "@components/RestCountries/Header/RestCountriesHeader";
import RestCountriesMain from "@components/RestCountries/Main/RestCountriesMain";
import colors from "@constants/colors";
import DarkModeContextProvider, {
  useDarkModeContext,
} from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";

const queryClient = new QueryClient();

const RestCountries = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeContextProvider>
        <ApplicationWrapper>
          <RestCountriesHeader />
          <RestCountriesMain />
        </ApplicationWrapper>
      </DarkModeContextProvider>
    </QueryClientProvider>
  );
};

export default RestCountries;

const ApplicationWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useDarkModeContext();
  return <StyledContainer $theme={theme}>{children}</StyledContainer>;
};

const {
  blue: { background },
  gray: { light },
} = colors["rest-countries"];

const StyledContainer = styled.div<{ $theme: TContextTheme }>`
  background-color: ${(props) =>
    props.$theme === "light" ? light : background};
  min-height: 100vh;
`;
