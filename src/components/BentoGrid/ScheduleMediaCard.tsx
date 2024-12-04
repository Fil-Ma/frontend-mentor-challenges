import image from "@assets/BentoGrid/illustration-schedule-posts.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";

const ScheduleMediaCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].purple[100]}
    $customStyles={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingBlock: "24px",
      h3: {
        fontSize: "1.4rem",
        lineHeight: "1.4rem",
        margin: 0,
      },
      p: {
        fontSize: "0.8rem",
        lineHeight: "0.8rem",
      },
    }}
  >
    <h3>Schedule to social media.</h3>
    <Image src={image} alt="create post button" $width="180%" />
    <p>
      Optimize post timings to publish content at the perfect time for your
      audience.
    </p>
  </Container>
);

export default ScheduleMediaCard;
