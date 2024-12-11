import styled from "styled-components";
import { TSender } from "./types";

export interface ImagesMessageProps {
  images: string[];
  sender: TSender;
}

const ImagesMessage = ({ images, sender }: ImagesMessageProps) => {
  return (
    <Wrapper $sender={sender}>
      {images.map((image, index) => (
        <Thumbnail key={index.toString()} src={image} alt={index.toString()} />
      ))}
    </Wrapper>
  );
};

export default ImagesMessage;

const Wrapper = styled.div<{ $sender: TSender }>`
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: ${(props) =>
    props.$sender === "destination" ? "flex-start" : "flex-end"};
`;

const Thumbnail = styled.img`
  border-radius: 4px;
  width: 56px;
  height: 56px;
`;
