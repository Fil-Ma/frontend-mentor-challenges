import MessageForm from "@components/InteractiveComments/MessageForm";
import colors from "@constants/colors";
import styled from "styled-components";
import data from "@assets/InteractiveComments/data.json";
import { Fragment, useEffect, useRef, useState } from "react";
import { IComment } from "@components/InteractiveComments/types";
import Comment from "@components/InteractiveComments/Comment/Comment";

const { neutral } = colors["interactive-comments"];

const currentUser = data.currentUser;

const InteractiveComments = () => {
  const [comments, setComments] = useState<IComment[]>(data.comments);
  const listEndRef = useRef<HTMLDivElement>(null);

  const addComment = (message: string) => {
    const newMessage: IComment = {
      id: 1231231, // TODO add dynamic id
      content: message,
      createdAt: "Now", //TODO add dynamic timestamp
      score: 0,
      user: currentUser,
      replies: [],
    };
    setComments((prev) => prev.concat(newMessage));
  };

  useEffect(() => {
    if (listEndRef.current)
      listEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [comments.length]);

  const handleIncrement =
    (commentId: number, replyId?: number) => (isIncrement: boolean) => {
      setComments((prev) =>
        prev.map((c) => {
          if (c.id !== commentId) return c;
          if (!replyId) {
            return {
              ...c,
              score: isIncrement ? c.score + 1 : c.score - 1,
            };
          }

          return {
            ...c,
            replies: c.replies.map((r) => {
              if (r.id !== replyId) return r;
              return {
                ...r,
                score: isIncrement ? r.score + 1 : r.score - 1,
              };
            }),
          };
        }),
      );
    };

  return (
    <Container>
      <Main>
        <MessageList>
          {comments.map((c) => {
            const { replies } = c;
            return (
              <Fragment key={c.id}>
                <Comment
                  key={c.id}
                  {...c}
                  handleIncrement={handleIncrement(c.id)}
                  userIsOwner={c.user.username === currentUser.username}
                />
                {replies.map((r, index) => (
                  <Comment
                    key={r.id}
                    handleIncrement={handleIncrement(c.id, r.id)}
                    userIsOwner={r.user.username === currentUser.username}
                    {...r}
                    position={
                      index === 0
                        ? "first"
                        : index === replies.length - 1
                          ? "last"
                          : undefined
                    }
                  />
                ))}
              </Fragment>
            );
          })}
          <div ref={listEndRef}></div>
        </MessageList>
        <MessageForm avatar={currentUser.image.png} sendMessage={addComment} />
      </Main>
    </Container>
  );
};

export default InteractiveComments;

const Container = styled.div`
  background-color: ${neutral.veryLightGray};
`;

const Main = styled.main`
  padding: 48px 64px;
  margin: 0 auto;
  max-width: 1440px;
  height: 100vh;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 20px 12px;
  }
`;

const MessageList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  scrollbar-width: thin;
  margin-bottom: 16px;
`;
