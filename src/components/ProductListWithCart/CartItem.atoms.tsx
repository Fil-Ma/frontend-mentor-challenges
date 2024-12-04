import colors from "@constants/colors";
import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-block: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  gap: 8px;

  p {
    margin: 0;
  }

  p:nth-of-type(2) {
    display: inline-flex;
    gap: 8px;
    align-items: center;
    margin-top: 8px;
  }

  mark {
    color: ${colors["product-list-with-cart"].red};
    background: inherit;
    font-weight: 500;
  }
`;
