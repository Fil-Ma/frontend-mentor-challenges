import styled from "styled-components";
import { TCommentBase } from "../types";
import colors from "@constants/colors";
import CommentScore from "./CommentScore";
import ReplyIcon from "@assets/InteractiveComments/icon-reply.svg?react";
import DeleteIcon from "@assets/InteractiveComments/icon-delete.svg?react";
import EditIcon from "@assets/InteractiveComments/icon-edit.svg?react";
import React from "react";
import useIsMobile from "@hooks/useIsMobile";

const { primary, neutral } = colors["interactive-comments"];

type TPosition = "first" | "last";

interface Props extends TCommentBase {
  replyingTo?: string;
  position?: TPosition;
  handleIncrement: (isIncrement: boolean) => void;
  userIsOwner: boolean;
}

const Comment = ({
  createdAt,
  position,
  replyingTo,
  content,
  score,
  user,
  userIsOwner,
  handleIncrement,
}: Props) => {
  const isMobile = useIsMobile(600);

  if (isMobile) {
    return (
      <Wrapper $isReply={!!replyingTo} $position={position}>
      
      <InfoSection>
        <Heading>
          <img src={user.image.png} alt="Profile Picture" />
          <p>{user.username}</p>
          <p style={{ flexGrow: 1 }}>{createdAt}</p>
          
        </Heading>

        <ContentWrapper>
          {replyingTo && <mark>@{replyingTo}&nbsp;</mark>}
          {content}
        </ContentWrapper>
      </InfoSection>
      <div>
      <CommentScore score={score} handleChange={handleIncrement} />
      <ActionsContainer>
            {userIsOwner ? (
              <>
                {Actions["delete"]}
                {Actions["edit"]}
              </>
            ) : Actions["reply"]}
          </ActionsContainer>
          </div>
    </Wrapper>
    )
  }
  return (
    <Wrapper $isReply={!!replyingTo} $position={position}>
      <CommentScore score={score} handleChange={handleIncrement} />
      <InfoSection>
        <Heading>
          <img src={user.image.png} alt="Profile Picture" />
          <p>{user.username}</p>
          <p style={{ flexGrow: 1 }}>{createdAt}</p>
          <ActionsContainer>
            {userIsOwner ? (
              <>
                {Actions["delete"]}
                {Actions["edit"]}
              </>
            ) : Actions["reply"]}
          </ActionsContainer>
        </Heading>

        <ContentWrapper>
          {replyingTo && <mark>@{replyingTo}&nbsp;</mark>}
          {content}
        </ContentWrapper>
      </InfoSection>
    </Wrapper>
  );
};

export default React.memo(Comment);

const Wrapper = styled.li<{ $isReply: boolean; $position?: TPosition }>`
  background-color: ${neutral.white};
  border-radius: 8px;
  padding: 16px;
  margin-block: 16px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  position: relative;

  margin-left: ${(props) => (props.$isReply ? "64px" : 0)};

  &::before {
    display: ${(props) => (props.$isReply ? "block" : "none")};
    content: "";
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    top: ${(props) => (props.$position !== "first" ? "-8px" : 0)};
    bottom: ${(props) => (props.$position !== "last" ? "-8px" : 0)};
    left: -32px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 16px;
    margin-left: ${(props) => (props.$isReply ? "16px" : 0)};

    div:last-of-type {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    &::before {
      left: -16px;
    }
  }
`;

const ContentWrapper = styled.p`
  margin-block: 16px;
  color: ${neutral.grayBlue};

  mark {
    color: ${primary.blue};
    font-weight: 500;
    background-color: transparent;
  }
`;

const InfoSection = styled.div`
  flex-grow: 1;

  img {
    width: 40px;
    height: 40px;
  }

  p {
    margin: 0;
  }
`;

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;

  p:first-of-type {
    font-weight: 500;
  }

  p:nth-of-type(2) {
    color: ${neutral.grayBlue};
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-direction: row;

  @media (max-width: 600px) {
    gap: 8px;
  }
`

const ActionButton = styled.button<{ $isDelete?: boolean }>`
  border: none;
  padding: 4px 8px;
  color: ${(props) => props.$isDelete ? primary.softRed : primary.blue};
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  transition: opacity 200ms ease-out;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    gap: padding: 2px 4px;
  }
`
const Actions = {
  reply: (
    <ActionButton><ReplyIcon /><span>Reply</span></ActionButton>
  ),
  edit: (
    <ActionButton><EditIcon /><span>Edit</span></ActionButton>
  ),
  delete: (
    <ActionButton $isDelete><DeleteIcon /><span>Delete</span></ActionButton>
  ),
}