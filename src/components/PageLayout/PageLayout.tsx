import { Outlet } from "react-router";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: min(100vw, 1440px);
  margin: 0 auto;
`;

const PageLayout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

export default PageLayout;
