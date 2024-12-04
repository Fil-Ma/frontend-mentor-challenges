import colors from "@constants/colors";
import styled from "styled-components";

const colorsRoot = colors["product-list-with-cart"];

export const IconButton = styled.span`
  width: 15px;
  height: 15px;
  color: white;
  border: 1px solid white;
  background-color: inherit;
  transition: background-color 0.2s ease-in;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  overflow: hidden;
  user-select: none;

  svg > path {
    transition: fill 0.2s ease-in;
  }

  &:hover {
    background-color: white;
    cursor: pointer;
  }

  &:hover > svg > path {
    fill: ${colorsRoot.red};
  }
`;

export const Container = styled.div<{ $active: boolean }>`
  flex: 1;

  figure {
    margin: 0;
    position: relative;
    width: max-content;
    border: 1px solid
      ${(props) =>
        props.$active ? colors["product-list-with-cart"].red : "transparent"};
    border-radius: 12px;
  }
`;

export const Button = styled.button`
  border: 1px solid ${colorsRoot.red};
  border-radius: 32px;
  width: 130px;
  padding: 8px 20px;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  cursor: pointer;
  font-size: 0.8rem;
  line-height: 0.8rem;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const Counter = styled.div`
  border: 1px solid ${colorsRoot.red};
  border-radius: 32px;
  width: 90px;
  height: 20px;
  padding: 8px 20px;
  background-color: ${colorsRoot.red};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: white;
  }

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

export const Image = styled.img<{ $width?: string }>`
  aspect-ratio: 1 / 1;
  width: ${(props) => props.$width || "250px"};
  user-select: none;
  border-radius: 12px;
  display: block;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 24px;

  p {
    margin: 0;
    line-height: 1rem;
  }

  p:nth-of-type(1) {
    fontsize: 0.8rem;
    color: rgba(0, 0, 0, 0.7);
  }

  p:nth-of-type(2) {
    fontweight: 500;
  }

  p:nth-of-type(3) {
    fontweight: 500;
    color: ${colorsRoot.red};
  }
`;
