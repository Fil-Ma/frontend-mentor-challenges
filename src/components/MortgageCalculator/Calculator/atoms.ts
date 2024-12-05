import colors from "@constants/colors";
import styled from "styled-components";

const { primary, neutral } = colors["mortgage-calculator"];

export const HelperText = styled.p<{ $isError?: boolean }>`
  font-size: 0.7rem;
  line-height: 0.7rem;
  color: ${(props) => (props.$isError ? primary.red : "black")};
`;

export const InputLabel = styled.label`
  font-size: 0.8rem;
  color: ${neutral.slate[500]};
  margin-block: 8px;
`;
