import colors from "@constants/colors";
import useIsMobile from "@hooks/useIsMobile";
import React from "react";
import styled from "styled-components";

const { primary, neutral } = colors.blogr;

type TextPosition = "left" | "right";

type TextBlock = {
  h3: string;
  p: string;
};

interface SectionProps {
  title?: string;
  image: string;
  textBlocks: TextBlock[];
  textPosition?: TextPosition;
}

const Section = ({
  title,
  image,
  textBlocks,
  textPosition = "left",
}: SectionProps) => {
  const imageAlt = title || textBlocks[0].h3;
  const isMobile = useIsMobile(640);
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {(textPosition === "right" || isMobile) && (
        <Image src={image} alt={imageAlt} />
      )}
      <TextContainer>
        {textBlocks.map(({ h3, p }) => (
          <React.Fragment key={h3}>
            <h3>{h3}</h3>
            <p>{p}</p>
          </React.Fragment>
        ))}
      </TextContainer>
      {textPosition === "left" && !isMobile && (
        <Image src={image} alt={imageAlt} />
      )}
    </Container>
  );
};

export default Section;

const Container = styled.section`
  padding: 150px 130px;
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 64px;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 32px;
    align-items: stretch;
    padding: 120px 24px;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  text-align: center;
  color: ${primary.blue.dark};
  font-size: 2.1rem;
  font-weight: 400;

  @media (max-width: 640px) {
    top: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  h3 {
    color: ${primary.blue.dark};
    margin: 16px 0;
    font-weight: 400px;
  }

  p {
    color: ${neutral.grayishBlue.dark};
    margin: 0 0 24px;
  }

  @media (max-width: 640px) {
    text-align: center;
  }
`;

const Image = styled.img`
  flex: 1;
  max-width: 50%;

  @media (max-width: 640px) {
    max-width: 100%;
  }
`;
