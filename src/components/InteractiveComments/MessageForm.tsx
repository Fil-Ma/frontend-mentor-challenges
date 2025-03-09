import colors from "@constants/colors";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const { primary, neutral } = colors["interactive-comments"];

const MessageForm = ({
  avatar,
  sendMessage,
}: {
  avatar: string;
  sendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledImage src={avatar} alt="User Avatar" />
      <MessageInput
        placeholder="Add a comment..."
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SendButton type="submit">Send</SendButton>
    </StyledForm>
  );
};

export default MessageForm;

const StyledForm = styled.form`
  background-color: ${neutral.white};
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
`;

const StyledImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
  border-radius: 100%;
`;

const MessageInput = styled.textarea`
  flex-grow: 1;
  border: 1px solid ${neutral.lightGray};
  border-radius: 8px;
  padding: 12px 16px;
  font-family: inherit;
  font-size: 1rem;
  resize: none;
`;

const SendButton = styled.button`
  color: ${neutral.white};
  background-color: ${primary.blue};
  font-weight: 500;
  text-transform: uppercase;
  padding: 12px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-family: inherit;
`;
