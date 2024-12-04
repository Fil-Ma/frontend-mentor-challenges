import colors from "@constants/colors";
import styled, { css } from "styled-components";
import { Styles } from "styled-components/dist/types";

export const Container = styled.div<{
  $backgroundColor?: string;
  $customStyles?: Styles<object>;
}>`
  box-sizing: border-box;
  height: 100%;
  padding: 20px 16px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${(props) =>
    props.$backgroundColor || colors["bento-grid"].white};
  ${(props) => props?.$customStyles && css(props.$customStyles)}
`;

export const Image = styled.img<{ $width?: string }>`
  width: ${(props) => props.$width || "100%"};
  height: auto;
`;
