import colors from "@constants/colors";
import styled from "styled-components";
import Button from "../Button";

const { neutral } = colors.blogr;

const IntroElement = () => {
  return (
    <Container>
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <ButtonsWrapper>
        <Button>Start for Free</Button>
        <Button variant="outlined">Learn More</Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default IntroElement;

const Container = styled.div`
  margin-block: 64px;

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  h1,
  p {
    color: ${neutral.white};
    margin: 12px auto;
    text-align: center;
    font-weight: 300;
  }
`;

const ButtonsWrapper = styled.div`
  margin-block: 24px;
  width: 100%;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;
