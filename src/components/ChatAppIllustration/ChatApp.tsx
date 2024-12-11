import colors from "@constants/colors";
import styled from "styled-components";
import image1 from "@assets/ChatAppIllustration/dog-image-1.jpg?inline";
import image2 from "@assets/ChatAppIllustration/dog-image-2.jpg?inline";
import image3 from "@assets/ChatAppIllustration/dog-image-3.jpg?inline";
import ImagesMessage, { ImagesMessageProps } from "./ImagesMessage";
import OfferMessage, { OfferMessageProps } from "./OfferMessage";
import TextMessage, { TextMessageProps } from "./TextMessage";
import HeaderContent from "./HeaderContent";

const { violet, white, gradient, background, blue } =
  colors["chat-app-illustration"];

type TMessage =
  | ImagesMessageProps
  | OfferMessageProps
  | TextMessageProps
  | { divider: boolean };

const messages: TMessage[] = [
  {
    text: "That sounds great. I'd be happy with that.",
    sender: "destination",
  },
  {
    text: "Could you send over some pictures of your dog, please?",
    sender: "destination",
  },
  {
    divider: true,
  },
  {
    images: [image1, image2, image3],
    sender: "source",
  },
  {
    text: "Here are a few pictures. She's a happy girl!",
    sender: "source",
  },
  {
    text: "Can you make it?",
    sender: "source",
  },
  {
    divider: true,
  },
  {
    text: "She looks so happy! The time we discussed works. How long shall I take her out for?",
    sender: "destination",
  },
  {
    offer: {
      details: "30 minute walk",
      price: 29,
    },
    sender: "destination",
  },
  {
    offer: {
      details: "1 hour walk",
      price: 49,
    },
    sender: "destination",
  },
];

const ChatApp = () => {
  return (
    <Container>
      <StyledHeader>
        <Notch />
        <HeaderContent />
      </StyledHeader>
      <StyledMain>
        {messages.map((message, index) => {
          if ("divider" in message) {
            return <hr key={index} />;
          } else if ("images" in message) {
            return <ImagesMessage key={index} {...message} />;
          } else if ("offer" in message) {
            return <OfferMessage key={index} {...message} />;
          } else {
            return <TextMessage key={index} {...message} />;
          }
        })}
      </StyledMain>
      <MessageEditor>
        <p>Type a message..</p>
        <SubmitButton>&gt;</SubmitButton>
      </MessageEditor>
    </Container>
  );
};

export default ChatApp;

const Container = styled.div`
  border: 12px solid ${white};
  border-radius: 32px;
  overflow: hidden;
  width: 280px;
  max-width: 280px;
  background-color: ${background};
`;

const StyledHeader = styled.header`
  position: relative;
  padding: 36px 12px 12px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: linear-gradient(
    to right,
    ${gradient.violet},
    ${gradient.magenta}
  );
`;

const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
  background-color: ${white};
  width: 60%;
  height: 20px;
`;

const StyledMain = styled.main`
  box-sizing: border-box;
  background-color: ${background};
  margin: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
`;

const MessageEditor = styled.footer`
  box-sizing: border-box;

  background-color: ${white};
  border: 4px solid ${white};
  border-radius: 36px;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 16px);
  margin: 8px;

  p {
    color: ${blue};
    margin: 0;
    padding: 4px 10px;
  }
`;

const SubmitButton = styled.button`
  width: 36px;
  height: 36px;
  color: ${white};
  background-color: ${violet.dark};
  border-radius: 50%;
  text-align: center;
`;
