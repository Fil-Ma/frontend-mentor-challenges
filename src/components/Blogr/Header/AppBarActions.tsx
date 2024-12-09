import styled from "styled-components";
import Button from "../Button";
import useIsMobile from "@hooks/useIsMobile";
import HamburgerIcon from "@assets/Blogr/icon-hamburger.svg?react";
import CloseIcon from "@assets/Blogr/icon-close.svg?react";
import { useState } from "react";
import Popover from "../Popover";
import colors from "@constants/colors";
import { TNavItem } from "./types";
import NavItem from "./NavItem";

const { neutral, gradient } = colors.blogr;
const backgroundGradient = `linear-gradient(to right, ${gradient.red.veryLight}, ${gradient.red.light})`;

const AppBarActions = ({ items }: { items: TNavItem[] }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMobile = useIsMobile(640);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl((prev) => {
      if (prev) return null;
      return event.currentTarget as HTMLElement;
    });
  };

  if (!isMobile) {
    return (
      <Container>
        <Button variant="text">Login</Button>
        <Button>Sign Up</Button>
      </Container>
    );
  }
  return (
    <Container>
      <Button
        variant="text"
        onClick={toggleMenu}
        customStyles={{
          width: "34px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        }}
      >
        {anchorEl ? <CloseIcon /> : <HamburgerIcon />}
      </Button>
      <Popover
        anchorEl={anchorEl}
        position="bottom-left"
        width={280}
        offset={{ y: 24 }}
        onClose={() => setAnchorEl(null)}
      >
        <UnorderedList>
          {items.map((item) => (
            <NavItem key={item.label} {...item} isMenu />
          ))}
        </UnorderedList>
        <Actions />
      </Popover>
    </Container>
  );
};

export default AppBarActions;

const Container = styled.div`
  margin-left: auto;
  position: relative;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Actions = () => {
  return (
    <>
      <Button
        variant="text"
        customStyles={{
          color: neutral.grayishBlue.dark,
        }}
      >
        Login
      </Button>
      <Button
        variant="contained"
        customStyles={{
          background: backgroundGradient,
          color: neutral.white,
          paddingInline: "24px",
        }}
      >
        Sign Up
      </Button>
    </>
  );
};
