import styled from "styled-components";
import { TNavRawItem } from "./types";
import colors from "@constants/colors";
import LightArrow from "@assets/Blogr/icon-arrow-light.svg?react";
import DarkArrow from "@assets/Blogr/icon-arrow-dark.svg?react";

const { neutral } = colors.blogr;

interface NavItemProps extends TNavRawItem {
  isMenu?: boolean;
}

const NavItem = ({ isMenu = false, label, action }: NavItemProps) => {
  const StyledText = isMenu ? MenuItem : BarItem;
  const Icon = isMenu ? DarkArrow : LightArrow;
  return (
    <li onClick={action}>
      <StyledText $isMenu={isMenu}>
        {label}
        <Icon />
      </StyledText>
    </li>
  );
};

export default NavItem;

type BaseProps = {
  $isMenu: boolean;
};

const BarItem = styled.p<BaseProps>`
  color: ${neutral.white};
  margin: 0;
  padding: 8px 4px;
  display: inline-flex;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${neutral.white};
  }
`;

const MenuItem = styled.p<BaseProps>`
  margin: 0;
  padding-block: 12px;
  text-align: center;
  color: ${neutral.blackBlue};
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  justify-content: center;
`;
