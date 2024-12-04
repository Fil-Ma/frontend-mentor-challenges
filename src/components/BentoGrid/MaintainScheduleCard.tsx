import image from "@assets/BentoGrid/illustration-consistent-schedule.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";

const MaintainScheduleCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].yellow[500]}
    $customStyles={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      paddingBottom: 0,
      p: {
        fontSize: "1.38rem",
        lineHeight: "1.38rem",
      },
    }}
  >
    <p>Maintain a consistent posting schedule</p>
    <Image src={image} alt="consistent schedule" />
  </Container>
);

export default MaintainScheduleCard;
