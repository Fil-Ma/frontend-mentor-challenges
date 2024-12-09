import styled from "styled-components";
import { TNavItem } from "./types";
import NavItem from "./NavItem";

const DesktopNav = ({ items }: { items: TNavItem[] }) => {
  return (
    <Container>
      <ul>
        {items.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </ul>
    </Container>
  );
};

export default DesktopNav;

const Container = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;
