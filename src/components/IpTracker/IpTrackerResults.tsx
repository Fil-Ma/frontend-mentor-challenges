import colors from "@constants/colors";
import styled from "styled-components";
import { ResultsObject, ResultsKeys } from "./types";

const keys: ResultsObject = {
  ipAddress: "IP ADDRESS",
  location: "LOCATION",
  timezone: "TIMEZONE",
  isp: "ISP",
};

const breakpoint = 600;

const IpTrackerResults = ({ results }: { results: ResultsObject }) => {
  const entries = Object.entries(results);
  return (
    <Container>
      {entries.map(([key, value], index) => (
        <ResultsItem key={key} $isLast={index === entries.length - 1}>
          <p className="results-item-key">{keys[key as ResultsKeys]}</p>
          <p className="results-item-value">{value || "-"}</p>
        </ResultsItem>
      ))}
    </Container>
  );
};

export default IpTrackerResults;

const {
  gray: { main, dark },
} = colors["ip-tracker"];

const ResultsItem = styled.div<{ $isLast: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  padding: 0 24px;
  flex: 1;

  p {
    margin: 0;
    text-align: left;
  }

  .results-item-key {
    color: ${main};
    font-size: 0.8rem;
    line-height: 0.8rem;
    font-weight: 400;
  }

  .results-item-value {
    color: ${dark};
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.2rem;
    min-height: 1.2rem;
  }

  @media (min-width: ${breakpoint}px) {
    ${(props) =>
      !props.$isLast &&
      `
      border-right: 1px solid ${main};
    `}
  }

  @media (max-width: ${breakpoint}px) {
    align-items: center;

    p {
      text-align: center;
    }
  }
`;

const Container = styled.div`
  border-radius: 12px;
  padding: 24px 0;
  position: absolute;
  right: 10%;
  left: 10%;
  background-color: white;
  bottom: 0;
  transform: translateY(50%);
  z-index: 1000;
  display: flex;

  flex-direction: row;
  align-items: stretch;

  @media (max-width: ${breakpoint}px) {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }
`;
