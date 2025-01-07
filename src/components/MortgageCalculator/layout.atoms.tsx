import colors from "@constants/colors";
import React from "react";
import styled, { css } from "styled-components";
import { Styles } from "styled-components/dist/types";

const { neutral } = colors["mortgage-calculator"];

export const PageContainer = styled.div`
  font-family: "Plus Jakarta Sans", sans-serif;
  font-style: normal;
  background-color: ${neutral.slate[100]};
  position: relative;
  width: 100vw;
  min-height: 100vh;
  max-width: 1440px;
`;

export const AppWrapper = styled.main`
  background-color: ${neutral.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: -4px 6px 15px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  overflow: hidden;
  display: inline-flex;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;

const CustomSection = styled.section<{
  $backgroundColor: string;
  $customStyles?: Styles<object>;
}>`
  padding: 24px;
  background-color: ${(props) => props.$backgroundColor};
  flex: 1;
  box-sizing: border-box;
  width: 320px;
  min-height: 320px;

  ${(props) => props.$customStyles && css(props.$customStyles)}
`;

const Heading = styled.h1<{ $color: string }>`
  font-size: 1.1rem;
  line-height: 1.2rem;
  color: ${(props) => props.$color};
  margin: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: inherit;
  margin-bottom: 16px;
  height: 25px;
`;

type THeader = {
  title?: string;
  titleColor?: string;
  actions?: React.ReactNode;
};

interface SectionElementProps {
  header: THeader;
  backgroundColor?: string;
  customStyles?: Styles<object>;
  children: React.ReactNode;
}

export const SectionElement = ({
  header,
  backgroundColor = "inherit",
  customStyles,
  children,
}: SectionElementProps) => {
  const { title, titleColor = "black", actions } = header;
  return (
    <CustomSection
      $backgroundColor={backgroundColor}
      $customStyles={customStyles}
    >
      {title && (
        <Header>
          <Heading $color={titleColor}>{title}</Heading>
          {actions}
        </Header>
      )}

      {children}
    </CustomSection>
  );
};
