import colors from "@constants/colors";
import styled from "styled-components";

const { primary, neutral } = colors["expenses-chart"];

export const ExpensesChartContainer = styled.div`
  background-color: ${neutral.cream};
  font-family: "DM Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  min-height: inherit;
`

export const ExpensesChartContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: max-content;
  align-items: stretch;
  justify-content: center;
  min-height: inherit;

  header {
    background-color: ${primary.softRed};
    border-radius: 12px;
    padding: 16px;
  }

  main {
    background-color: white;
    border-radius: 12px;
    padding: 16px;
  }
`
