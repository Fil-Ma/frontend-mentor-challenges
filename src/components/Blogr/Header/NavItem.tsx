import styled, { css, keyframes } from "styled-components";
import { TNavItem } from "./types";
import colors from "@constants/colors";
import LightArrow from "@assets/Blogr/icon-arrow-light.svg?react";
import DarkArrow from "@assets/Blogr/icon-arrow-dark.svg?react";
import { useCallback, useRef, useState } from "react";
import Popover from "../Popover";

const { neutral } = colors.blogr;

interface NavItemProps extends TNavItem {
  isMenu?: boolean;
}

const NavItem = ({ isMenu = false, label, action, subItems }: NavItemProps) => {
  const [active, setActive] = useState(false);
  const anchorEl = useRef<HTMLLIElement>(null);

  const StyledText = isMenu ? MenuItem : BarItem;
  const Icon = isMenu ? DarkArrow : LightArrow;

  const renderList = useCallback(
    () => (
      <List $isMenu={isMenu}>
        {subItems.map(({ label, action }) => (
          <SubItem key={label} $isMenu={isMenu} onClick={action}>
            <p>{label}</p>
          </SubItem>
        ))}
      </List>
    ),
    [isMenu],
  );

  return (
    <div>
      <li onClick={action} ref={anchorEl}>
        <StyledText
          $isMenu={isMenu}
          $active={active}
          onClick={() => setActive((prev) => !prev)}
        >
          {label}
          <Icon />
        </StyledText>
        {isMenu && active && renderList()}
      </li>

      {!isMenu && (
        <Popover
          anchorEl={active ? anchorEl.current : null}
          onClose={() => setActive(false)}
          width={150}
          position="bottom-center"
        >
          {renderList()}
        </Popover>
      )}
    </div>
  );
};

export default NavItem;

type BaseProps = {
  $isMenu: boolean;
  $active: boolean;
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

  ${(props) =>
    props.$active &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
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

  ${(props) =>
    props.$active &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

const fadeIn = keyframes`
from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const subItemsAnimation = css`
  animation: ${fadeIn} 0.2s ease-out forwards;
`;

const List = styled.ul<{ $isMenu: boolean }>`
  background-color: ${(props) =>
    props.$isMenu ? neutral.grayishBlue.main : neutral.white};
  list-style-type: none;
  margin: 0;
  padding: 4px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  ${(props) => props.$isMenu && subItemsAnimation}
`;

const SubItem = styled.li<{ $isMenu: boolean }>`
  background-color: inherit;
  text-align: ${(props) => (props.$isMenu ? "center" : "left")};
  color: ${neutral.grayishBlue.dark};
  padding: 4px;

  p {
    margin: 0;
  }

  &:hover {
    color: ${neutral.blackBlue};
  }
`;
