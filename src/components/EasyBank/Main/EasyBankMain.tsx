import styled from "styled-components";
import Button from "../Button";
import PerksSection from "./PerksSection";
import colors from "@constants/colors";
import ArticlesSection from "./ArticlesSection";
// import desktopBackground from "@assets/EasyBank/bg-intro-desktop.svg?inline";

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
      </IntroSection>
      <PerksSection />
      <ArticlesSection />
    </Main>
  );
};

export default EasyBankMain;

// background-image: url("${desktopBackground}");
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: 140% 75%;

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
  width: 40%;
  padding: 120px 12px;
  max-width: 1440px;
  margin: 0 auto;
`;
