import colors from "@constants/colors";
import styled from "styled-components";

const { blue, white, green, cyan } = colors["easy-bank"];

type LogoTheme = "light" | "dark";

const EasyBankLogo = ({ theme = "light" }: { theme?: LogoTheme }) => {
  const lightBars = [
    `linear-gradient(to bottom, ${green}, ${cyan})`,
    `linear-gradient(to bottom, hsl(136, 65%, 71%), hsl(192, 70%, 71%))`,
    `linear-gradient(to bottom, hsl(136, 65%, 91%), hsl(192, 70%, 91%))`,
  ];
  const darkBars = [
    `linear-gradient(to bottom, ${green}, hsl(192, 70%, 71%))`,
    `linear-gradient(to bottom, hsl(136, 65%, 41%), hsl(192, 70%, 41%))`,
    `linear-gradient(to bottom, hsl(136, 65%, 31%), hsl(192, 70%, 31%))`,
  ];
  return (
    <Container $theme={theme}>
      <Logo $barColors={theme === "light" ? lightBars : darkBars}>
        <LogoBar />
        <LogoBar />
        <LogoBar />
      </Logo>

      <p>easybank</p>
    </Container>
  );
};

export default EasyBankLogo;

const Container = styled.div<{ $theme: LogoTheme }>`
  display: inline-flex;
  align-items: center;
  gap: 2px;

  p {
    color: ${(props) => (props.$theme === "dark" ? white : blue.dark)};
    margin: 0.5rem 0;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 600;
  }
`;

const Logo = styled.div<{ $barColors: string[] }>`
  position: relative;
  width: 44px;
  height: 36px;

  div:nth-child(1) {
    position: absolute;
    top: 2px;
    left: 2px;
    background: ${(props) => props.$barColors[0]};
  }

  div:nth-child(2) {
    position: absolute;
    top: 2px;
    left: 10px;
    background: ${(props) => props.$barColors[1]};
  }

  div:nth-child(3) {
    position: absolute;
    top: 2px;
    left: 18px;
    background: ${(props) => props.$barColors[2]};
  }
`;

const LogoBar = styled.div`
  position: relative;
  width: 24px;
  height: 32px;
  clip-path: polygon(76% 0%, 100% 0%, 33% 100%, 0% 100%);
`;
