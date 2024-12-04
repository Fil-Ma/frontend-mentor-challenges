import styled from "styled-components";

const ModalTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <Container>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </Container>
  );
};

export default ModalTitle;

const Container = styled.div`
  h2 {
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1rem;
    color: rgba(0, 0, 0, 0.8);
  }
`;
