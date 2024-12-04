import styled from "styled-components";
import { BentoCardItem } from "./types";
import colors from "@constants/colors";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: repeat(10, 48px);
  gap: 1rem;
  grid-template-areas:
    "create media media schedule"
    "create media media schedule"
    "create media media schedule"
    "create media media schedule"
    "create manage maintain schedule"
    "write manage maintain schedule"
    "write manage maintain schedule"
    "write manage followers followers"
    "write manage followers followers"
    "write manage followers followers";

  p {
    margin: 0;
    padding: 0;
    color: ${colors["bento-grid"].black};
  }
`;

const ItemContainer = styled.div<{ $area: string }>`
  grid-area: ${(props) => props.$area};
  overflow: hidden;
`;

const Layout = ({ cards }: { cards: BentoCardItem[] }) => {
  return (
    <Container>
      {cards.map(({ area, Component }) => (
        <ItemContainer key={area} $area={area}>
          {Component}
        </ItemContainer>
      ))}
    </Container>
  );
};

export default Layout;
