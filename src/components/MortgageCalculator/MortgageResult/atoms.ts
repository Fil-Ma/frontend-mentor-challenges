import styled from "styled-components";
import colors from "@constants/colors";

const { neutral } = colors["mortgage-calculator"];

export const HighlitedParagraph = styled.p`
  margin: 0;
  color: ${neutral.white};
  font-size: 1.1rem;
`;

export const InfoParagraph = styled.p`
  color: ${neutral.slate[100]};
  opacity: 0.7;
  margin: 0;
  font-size: 0.8rem;
`;
