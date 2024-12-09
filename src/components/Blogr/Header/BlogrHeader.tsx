import styled from "styled-components";
import IntroElement from "./IntroElement";
import colors from "@constants/colors";
import DesktopPattern from "@assets/Blogr/bg-pattern-intro-desktop.svg?inline";
import MobilePattern from "@assets/Blogr/bg-pattern-intro-desktop.svg?inline";
import Logo from "@assets/Blogr/logo.svg?react";
import DesktopNav from "./DestopNav";
import AppBarActions from "./AppBarActions";
import navItems from "../menus";

const BlogrHeader = () => {
  return (
    <Header>
      <AppBarContainer>
        <Logo />
        <DesktopNav items={navItems} />
        <AppBarActions items={navItems} />
      </AppBarContainer>
      <IntroElement />
    </Header>
  );
};

export default BlogrHeader;

const Header = styled.header`
  background: url("${DesktopPattern}"),
    linear-gradient(
      to right,
      ${colors.blogr.gradient.red.veryLight},
      ${colors.blogr.gradient.red.light}
    );

  background-size:
    2000px 2000px,
    contain;
  background-repeat: no-repeat, no-repeat;
  background-position:
    30% 52%,
    center;

  padding: 32px 130px;
  border-bottom-left-radius: 64px;

  @media (max-width: 640px) {
    background: url("${MobilePattern}"),
      linear-gradient(
        to bottom,
        ${colors.blogr.gradient.red.veryLight},
        ${colors.blogr.gradient.red.light}
      );
    background-size:
      1000px 1000px,
      contain;
    background-position:
      35% 40%,
      center;
    padding-inline: 24px;
  }
`;

const AppBarContainer = styled.div`
  display: inline-flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
