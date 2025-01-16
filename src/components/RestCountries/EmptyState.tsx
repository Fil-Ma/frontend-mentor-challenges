import colors from "@constants/colors";
import { useDarkModeContext } from "@contexts/DarkMode/DarkModeContext";
import { TContextTheme } from "@contexts/DarkMode/types";
import styled from "styled-components";

const {
  blue: { text },
  white,
} = colors["rest-countries"];

const EmptyState = () => {
  const { theme } = useDarkModeContext()
  return (
    <Wrapper $theme={theme}>
      <p>No data is availble</p></Wrapper>
  )
}

export default EmptyState;

const Wrapper = styled.div<{ $theme: TContextTheme }>`
display: flex;
align-items: center;
justify-content: center;
min-height: 50vh;

p {
font-size: 2rem;
  line-height: 2.1rem;

  color: ${(props) => (props.$theme === "light" ? text : white)};
}
  
`