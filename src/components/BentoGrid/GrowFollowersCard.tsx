import image from "@assets/BentoGrid/illustration-grow-followers.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";

const GrowFollowersCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].purple[500]}
    $customStyles={{
      display: "flex",
      flexDirection: "row",
      gap: "8px",
      paddingBlock: "16px",
      p: {
        fontSize: "1.5rem",
        lineHeight: "1.5rem",
        fontWeight: 500,
        color: colors["bento-grid"].white,
        alignSelf: "center",
      },
      em: {
        color: colors["bento-grid"].purple[500],
      },
    }}
  >
    <Image src={image} alt="create post button" />
    <p>Grow followers with non-stop content.</p>
  </Container>
);
export default GrowFollowersCard;
