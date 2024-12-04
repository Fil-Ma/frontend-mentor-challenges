import image from "@assets/BentoGrid/illustration-ai-content.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";

const WriteContentCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].yellow[500]}
    $customStyles={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      justifyContent: "space-between",
      p: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        fontWeight: 500,
      },
    }}
  >
    <p>Write your content using AI</p>
    <Image src={image} alt="ai content" />
  </Container>
);

export default WriteContentCard;
