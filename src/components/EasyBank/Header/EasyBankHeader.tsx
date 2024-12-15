import styled from "styled-components";
import EasyBankLogo from "../EasyBankLogo";
import DesktopAppBar from "./DesktopAppBar";
import useIsMobile from "@hooks/useIsMobile";

const EasyBankHeader = () => {
  const isMobile = useIsMobile(640);
  return (
    <Header>
      <EasyBankLogo />
      {!isMobile && <DesktopAppBar />}
    </Header>
  );
};

export default EasyBankHeader;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px;

  max-width: 1440px;
  margin: 0 auto;
`;
