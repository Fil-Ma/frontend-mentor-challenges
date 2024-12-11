import colors from "@constants/colors";
import styled from "styled-components";

const { violet } = colors["chat-app-illustration"];

const Text = () => {
  return (
    <Container>
      <h1>Simple booking</h1>
      <p>
        Stay in touch with our dog walkers through the chat interface. This
        makes it easy to discuss arrangement and make bookings. Once the walk
        has been completed you can rate your walker and book again all through
        the chat.
      </p>
    </Container>
  );
};

export default Text;

const Container = styled.div`
  h1 {
    color: ${violet.desaturated};
  }

  p {
    color: ${violet.grayish};
  }

  @media (max-width: 640px) {
    p, h1 {
      text-align: center;
    }
  }
`;
