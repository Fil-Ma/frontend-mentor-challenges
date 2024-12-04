import image from "@assets/BentoGrid/illustration-create-post.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";

const CreateAccountCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].yellow[100]}
    $customStyles={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      paddingBlock: "48px",
      p: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        fontWeight: 500,
      },
      em: {
        color: colors["bento-grid"].purple[500],
      },
    }}
  >
    <p>
      Create and schedule content <em>quicker</em>.
    </p>
    <Image src={image} alt="create post button" />
  </Container>
);

export default CreateAccountCard;
