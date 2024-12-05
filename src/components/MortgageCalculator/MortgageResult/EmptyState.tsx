import styled from "styled-components";
import { InfoParagraph, HighlitedParagraph } from "./atoms";
import EmptyIllustration from "@assets/MortgageCalculator/illustration-empty.svg?react";

const EmptyState = () => {
  return (
    <Container>
      <EmptyIllustration />
      <HighlitedParagraph>Results shown here</HighlitedParagraph>
      <InfoParagraph>
        Complete the form and click &quot;calculate repayments&quot; to see what
        your monthly repayments would be
      </InfoParagraph>
    </Container>
  );
};

export default EmptyState;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
