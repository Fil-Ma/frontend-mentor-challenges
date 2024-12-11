import styled from "styled-components";
import avatar from "@assets/ChatAppIllustration/avatar.jpg?inline";
import colors from "@constants/colors";

const { white, violet } = colors["chat-app-illustration"];

const HeaderContent = () => {
  return (
    <Container>
      <IconButton>
      &#8249;
      </IconButton>
      <Avatar src={avatar} alt="avatar" />
      <NameContainer>
        <h3>Samuel Green</h3>
        <p>Available to Walk</p>
      </NameContainer>
      <IconButton>
      &#8942;
      </IconButton>
    </Container>
  )
}

export default HeaderContent;

const Container = styled.div`
width: 100%;
  display: inline-flex;
  gap: 8px;
  align-items: center;
`

const IconButton = styled.button`
  padding: 4px;
  margin: 0;
  color: ${white};
  background: transparent;
  border: none;
  font-size: 1.5rem;
`

const Avatar = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  border: 2px solid ${white};
  border-radius: 50%;
  box-sizing: border-box;
`

const NameContainer = styled.div`
flex-grow: 1;
  h3 {
    color: ${white};
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;
  }

  p {
    color: ${violet.pale};
    font-size: 0.7rem;
    line-height: 0.7rem;
    margin: 4px 0;
  }
`