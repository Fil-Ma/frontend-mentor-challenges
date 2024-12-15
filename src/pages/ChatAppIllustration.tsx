import ChatApp from "@components/ChatAppIllustration/ChatApp";
import Text from "@components/ChatAppIllustration/Text";
import colors from "@constants/colors";
import styled from "styled-components";

const { background, gradient } = colors["chat-app-illustration"];

const ChatAppillustration = () => {
  return (
    <Container>
      <DesignPart />
      <Content>
        <div>
          <ChatApp />
        </div>
        <Text />
      </Content>
    </Container>
  );
};

export default ChatAppillustration;

const Container = styled.div`
  background-color: ${background};
  position: relative;
  z-index: 1;
  min-height: 100vh;
`;

const DesignPart = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  width: 30%;
  height: 80%;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  background: linear-gradient(
    to bottom,
    ${gradient.magenta},
    ${gradient.violet}
  );

  @media (max-width: 480px) {
    width: 90%;
    height: 60%;
    transform: translateX(-50%);
  }
`;

const Content = styled.div`
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 48px;
  max-width: 1440px;
  margin: 0 auto;
  min-height: inherit;
  padding: 0 200px;

  @media (max-width: 1080px) {
    padding: 0 120px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 60px 80px;
  }

  @media (max-width: 480px) {
    padding: 60px 20px;
  }

  > div {
    flex: 1;
    z-index: 2;
  }

  div:first-of-type {
    margin: 0 auto;
  }
`;
