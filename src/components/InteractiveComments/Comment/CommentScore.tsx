import colors from "@constants/colors";
import styled from "styled-components";
import PlusIcon from "@assets/InteractiveComments/icon-plus.svg?react";
import MinusIcom from "@assets/InteractiveComments/icon-minus.svg?react";

const { primary, neutral } = colors["interactive-comments"];

const CommentScore = ({
  score,
  handleChange,
}: {
  score: number;
  handleChange: (isIncrement: boolean) => void;
}) => {
  return (
    <Wrapper>
      <button aria-label="Increment Score" onClick={() => handleChange(true)}>
        <PlusIcon />
      </button>
      <p>{score}</p>
      <button aria-label="Decrement Score" onClick={() => handleChange(false)}>
        <MinusIcom />
      </button>
    </Wrapper>
  );
};

export default CommentScore;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  background-color: ${neutral.veryLightGray};
  color: ${primary.blue};
  height: max-content;
  border-radius: 4px;
  padding: 4px;

  @media (max-width: 600px) {
    flex-direction: row;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 1.1rem;
  }

  button {
    background-color: inherit;
    border: none;
    border-radius: 4px;
    padding: 4px;
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 200ms ease-in;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
`;
