import colors from "@constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  background-color: ${colors["multi-step-form"].neutral.magnolia};
`;

const Frame = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const PageContainer = ({ children }: { children: React.ReactNode }) => (
  <Container>
    <Frame>{children}</Frame>
  </Container>
);
