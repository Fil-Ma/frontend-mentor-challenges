import styled from "styled-components";
import { TBaseStepProps } from "../types";
import checkIcon from "@assets/MultiStepForm/icon-thank-you.svg?inline";
import colors from "@constants/colors";

const { primary, neutral } = colors["multi-step-form"];

interface IProps extends TBaseStepProps {}

const ThankYou = (_: IProps) => {
  return (
    <Container>
      <img src={checkIcon} alt="checkmark illustration" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </Container>
  );
};

export default ThankYou;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    height: 64px;
    width: 64px;
  }

  h1 {
    color: ${primary.marineBlue};
    font-weight: 600;
    font-size: 2rem;
    line-height: 2rem;
    margin-block: 16px;
  }

  p {
    margin: 0;
    padding-inline: 50px;
    color: ${neutral.coolGray};
  }
`;
