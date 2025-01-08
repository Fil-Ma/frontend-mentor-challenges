import styled from "styled-components";
import EasyBankLogo from "../EasyBankLogo";
import DesktopAppBar from "./DesktopAppBar";
import useIsMobile from "@hooks/useIsMobile";
import Popover from "@components/Blogr/Popover";
import React, { useState } from "react";
import HamburgerIcon from "@assets/EasyBank/icon-hamburger.svg?react";
import CloseIcon from "@assets/EasyBank/icon-close.svg?react";
import colors from "@constants/colors";

const navElements = ["Home", "About", "Contact", "Blog", "Careers"];
const { blue } = colors["easy-bank"];

const EasyBankHeader = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isMobile = useIsMobile(640);

  const togglePopover = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked", Boolean(anchorEl));
    if (anchorEl) return;
    setAnchorEl(event.currentTarget);
  };

  return (
    <Header>
      <EasyBankLogo />
      {!isMobile && <DesktopAppBar />}
      {isMobile && (
        <>
          <Popover
            anchorEl={anchorEl}
            position="bottom-left"
            width={300}
            offset={{ y: 24, x: 15 }}
            onClose={() => setAnchorEl(null)}
          >
            <Nav>
              <ul>
                {navElements.map((el) => (
                  <li key={el}>
                    <NavLink href={"#" + el.toLowerCase()}>{el}</NavLink>
                  </li>
                ))}
              </ul>
            </Nav>
          </Popover>
          <MobileButton onClick={togglePopover}>
            {anchorEl ? <CloseIcon /> : <HamburgerIcon />}
          </MobileButton>
        </>
      )}
    </Header>
  );
};

export default EasyBankHeader;

const Nav = styled.nav`
  text-align: center;
  width: 100%;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 8px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${blue.dark};
  font-weight: 400;
  font-size: 1.1rem;
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px;

  max-width: 1440px;
  margin: 0 auto;
`;

const MobileButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 8px;
  border: none;
  background: inherit;
`;
