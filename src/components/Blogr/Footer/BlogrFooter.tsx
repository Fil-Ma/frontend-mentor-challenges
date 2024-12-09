import colors from "@constants/colors";
import styled from "styled-components";
import Logo from "@assets/Blogr/logo.svg?react";
import navItems from "../menus";
import FooterList from "./FooterList";

const { neutral } = colors.blogr;

const BlogrFooter = () => {
  return (
    <Footer>
      <Logo />
      {navItems.map((category) => (
        <FooterList
          title={category.label}
          items={category.children.map(({ label }) => ({ label }))}
        />
      ))}
    </Footer>
  );
};

export default BlogrFooter;

const Footer = styled.footer`
  background-color: ${neutral.blackBlue};
  border-top-right-radius: 64px;
  padding: 24px 130px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 640px) {
    padding-inline: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;