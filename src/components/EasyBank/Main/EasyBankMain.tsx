import styled from "styled-components";
import Button from "../Button";
import PerksSection from "./PerksSection";
import colors from "@constants/colors";
import ArticlesSection from "./ArticlesSection";
import desktopBackground from "@assets/EasyBank/bg-intro-desktop.svg?inline";
import mobileBackground from "@assets/EasyBank/bg-intro-mobile.svg?inline";

const { blue } = colors["easy-bank"];

const EasyBankMain = () => {
  return (
    <Main>
      <IntroSection>
        <div>
          <h1>Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
        <div className="intro-section-image" />
      </IntroSection>
      <PerksSection />
      <ArticlesSection />
    </Main>
  );
};

export default EasyBankMain;

const Main = styled.main`
  h1,
  h2,
  h3,
  h4 {
    color: ${blue.dark};
    margin: 0;
    font-weight: 400;
  }

  p {
    color: ${blue.main};
    margin-block: 1.5rem;
  }
`;

const IntroSection = styled.section`
  padding: 0 12px;
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  gap: 16px;

  h1 {
    font-size: 2.5rem;
    line-height: 2.7rem;
  }

  div:first-of-type {
    width: 30%;
    padding: 150px 0;
  }

  .intro-section-image {
    flex-grow: 1;
    min-height: 300px;
    background-image: url("${desktopBackground}");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 10% 80%;
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;

    div:first-of-type {
      width: 100%;
      text-align: center;
      padding-block: 30px 80px;
    }

    .intro-section-image {
      background-image: url("${mobileBackground}");
      background-size: cover;
    }
  }
`;
