import styled from "styled-components";
import onlineImage from "@assets/EasyBank/icon-online.svg?inline";
import budgetingImage from "@assets/EasyBank/icon-budgeting.svg?inline";
import onboardingImage from "@assets/EasyBank/icon-onboarding.svg?inline";
import apiImage from "@assets/EasyBank/icon-api.svg?inline";

type TPerk = {
  image: string;
  title: string;
  paragraph: string;
};

const perks: TPerk[] = [
  {
    image: onlineImage,
    title: "Online Banking",
    paragraph: `
      Our modern web and mobile applications allow you to
      keep track of your finances wherever you are in the world.
    `,
  },
  {
    image: budgetingImage,
    title: "Simple Budgeting",
    paragraph: `
      See exactly; where your money goes each month. Receive notifications
      when you're close to hitting your limits.
    `,
  },
  {
    image: onboardingImage,
    title: "Fast Onboarding",
    paragraph: `
      We don't do branches. Open your account in minutes online and
      start taking control of your finances right away.
    `,
  },
  {
    image: apiImage,
    title: "Open API",
    paragraph: `
      Manage your savings, investements, pension, and much more from one
      account. Tracking your money has never been easier.
    `,
  },
];

const PerksSection = () => {
  return (
    <Container>
      <div>
        <SectionHeading>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </SectionHeading>
        <PerksContainer>
          {perks.map((perk) => (
            <Perk key={perk.title} {...perk} />
          ))}
        </PerksContainer>
      </div>
    </Container>
  );
};

export default PerksSection;

const Container = styled.section`
  background-color: hsl(0, 0%, 95%);

  > div {
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 12px;
  }
`;

const SectionHeading = styled.div`
  width: 50%;

  h2 {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

const PerksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Perk = ({ image, title, paragraph }: TPerk) => {
  return (
    <PerkWrapper>
      <img src={image} alt={title} />
      <figcaption>
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </figcaption>
    </PerkWrapper>
  );
};

const PerkWrapper = styled.figure`
  flex: 1 1 230px;
  max-width: 25%;
  min-width: 230px;
  margin-inline: 0;

  h3 {
    white-space: nowrap;
    margin-block: 16px !important;
  }

  p {
    margin: 0 !important;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    text-align: center;
  }
`;
