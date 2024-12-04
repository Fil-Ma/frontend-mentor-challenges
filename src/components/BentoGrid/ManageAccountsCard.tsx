import avatars from "@assets/BentoGrid/illustration-audience-growth.webp";
import followerCounters from "@assets/BentoGrid/illustration-multiple-platforms.webp";
import colors from "@constants/colors";
import { Container, Image } from "./atoms";
import styled from "styled-components";

const PercentageContainer = styled.div`
  margin-top: auto;
`;

const ManageAccountsCard = () => (
  <Container
    $backgroundColor={colors["bento-grid"].yellow[100]}
    $customStyles={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      h4: {
        fontSize: "1.38rem",
        lineHeight: "1.38rem",
        margin: 0,
      },
      p: {
        fontSize: "2.4rem",
        lineHeight: "2.4rem",
        fontWeight: 500,
      },
      small: {
        fontSize: "0.8rem",
        lineHeight: "0.8rem",
      },
    }}
  >
    <Image src={followerCounters} alt="social media followers" $width="150%" />
    <h4>Manage multiple accounts and platforms.</h4>
    <PercentageContainer>
      <p>&gt;56&#37;</p>
      <small>faster audience growth</small>
    </PercentageContainer>

    <Image src={avatars} alt="user's avatars" $width="80%" />
  </Container>
);

export default ManageAccountsCard;
