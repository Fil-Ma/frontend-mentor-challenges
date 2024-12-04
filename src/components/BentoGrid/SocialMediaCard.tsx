import image from "@assets/BentoGrid/illustration-five-stars.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";
import styled from "styled-components";

const ReviewsFigure = styled.figure`
  width: 45%;

  figcaption {
    color: ${colors["bento-grid"].white};
    font-size: 0.9rem;
    text-align: center;
  }
`;

const SocialMediaCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].purple[500]}
    $customStyles={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      paddingInline: "32px",
      h3: {
        fontSize: "2.2rem",
        lineHeight: "2.2rem",
        fontWeight: 500,
        color: colors["bento-grid"].white,
        margin: 0,
        textAlign: "center",
      },
      span: {
        color: colors["bento-grid"].yellow[500],
      },
    }}
  >
    <h3>
      Social Media <span>10x</span> <em>Faster</em> with AI
    </h3>

    <ReviewsFigure>
      <Image src={image} alt="five stars" />
      <figcaption>Over 4000 5-star reviews</figcaption>
    </ReviewsFigure>
  </Container>
);

export default SocialMediaCard;
