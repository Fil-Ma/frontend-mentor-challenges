import { Outlet } from "react-router";
import styled from "styled-components";

const LayoutContainer = styled.div`
  max-width: 100vw;
  min-height: 100vh;
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
