import EasyBankFooter from "@components/EasyBank/Footer/EasyBankFooter";
import EasyBankHeader from "@components/EasyBank/Header/EasyBankHeader";
import EasyBankMain from "@components/EasyBank/Main/EasyBankMain";
import styled from "styled-components";

const EasyBank = () => {
  return (
    <Container>
      <EasyBankHeader />
      <EasyBankMain />
      <EasyBankFooter />
    </Container>
  );
};

export default EasyBank;

const Container = styled.div`
  font-family: "Public Sans", sans-serif;
  font-style: normal;
`;
