import colors from "@constants/colors";
import styled from "styled-components";
import Button from "../Button";
import EasyBankLogo from "../EasyBankLogo";
import FacebookIcon from "@assets/EasyBank/icon-facebook.svg?react";
import YoutubeIcon from "@assets/EasyBank/icon-youtube.svg?react";
import TwitterIcon from "@assets/EasyBank/icon-twitter.svg?react";
import PinterestIcon from "@assets/EasyBank/icon-pinterest.svg?react";
import InstagramIcon from "@assets/EasyBank/icon-instagram.svg?react";

const { blue, gray, green } = colors["easy-bank"];

const redirects = [
  "About Us",
  "Contact",
  "Blog",
  "Careers",
  "Support",
  "Privacy Policy",
];

const EasyBankFooter = () => {
  const renderRedirect = (el: string) => (
    <li key={el}>
      <a href={"#" + el.toLowerCase()}>{el}</a>
    </li>
  );

  return (
    <Footer>
      <Container>
        <VerticalContainer>
          <EasyBankLogo theme="dark" />
          <IconsList>
            {[
              FacebookIcon,
              YoutubeIcon,
              TwitterIcon,
              PinterestIcon,
              InstagramIcon,
            ].map((Icon, index) => (
              <li key={index}>
                <Icon />
              </li>
            ))}
          </IconsList>
        </VerticalContainer>
        <Redirects>
          <ul>{redirects.slice(0, 3).map(renderRedirect)}</ul>
          <ul>{redirects.slice(3, redirects.length).map(renderRedirect)}</ul>
        </Redirects>
        <VerticalContainer $align="end">
          <Button>Request Invite</Button>
          <RightsParagraph>&reg;Easybank. All Rights Reserved</RightsParagraph>
        </VerticalContainer>
      </Container>
    </Footer>
  );
};

export default EasyBankFooter;

const Footer = styled.footer`
  background-color: ${blue.dark};
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 24px 12px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const VerticalContainer = styled.div<{ $align?: "start" | "end" }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.$align === "end" ? "flex-end" : "flex-start"};
  justify-content: center;
  gap: 24px;

  @media (max-width: 700px) {
    align-items: center;
  }
`;

const IconsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 700px) {
    gap: 12px;
  }
`;

const RightsParagraph = styled.p`
  margin: 0;
  color: hsl(0, 0%, 58%);
  font-size: 0.8rem;
  line-height: 0.8rem;
`;

const Redirects = styled.div`
  flex-grow: 1;
  display: inline-flex;
  align-items: flex-start;
  margin-left: 48px;

  ul {
    list-style-type: none;
    padding: 0 48px;
    margin: 0;
  }

  li {
    margin-block: 8px;
  }

  a {
    font-size: 0.9rem;
    line-height: 0.9rem;
    padding: 8px;
    text-decoration: none;
    color: ${gray};
  }

  a:hover {
    color: ${green};
    cursor: pointer;
  }

  @media (max-width: 820px) {
    ul {
      padding-inline: 16px;
    }
  }

  @media (max-width: 700px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
