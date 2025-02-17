import colors from "@constants/colors";
import useIsMobile from "@hooks/useIsMobile";
import styled from "styled-components";

const { primary, neutral } = colors["multi-step-form"];

type TAction = {
  enabled: boolean;
  action: VoidFunction;
  label?: string;
};

type TNavigation = {
  backLink?: TAction;
  nextLink: TAction;
};

type Props = {
  title: string;
  subTitle: string;
  navigation: TNavigation;
  children: React.ReactNode;
};

const StepLayout = ({ title, subTitle, navigation, children }: Props) => {
  const isMobile = useIsMobile(600);

  if (isMobile) {
    return (
      <>
        <Container>
          <Content>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            {children}
          </Content>
        </Container>
        <Actions>
          <Button
            $variant="text"
            disabled={!navigation.backLink?.enabled}
            onClick={navigation.backLink?.action}
            $invisible={!navigation.backLink}
          >
            {navigation.backLink?.label || "Go Back"}
          </Button>

          <Button
            $variant="filled"
            disabled={!navigation.nextLink.enabled}
            onClick={navigation.nextLink.action}
          >
            {navigation.nextLink.label || "Next Step"}
          </Button>
        </Actions>
      </>
    );
  }
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <p>{subTitle}</p>
        {children}
      </Content>
      <Actions>
        <Button
          $variant="text"
          disabled={!navigation.backLink?.enabled}
          onClick={navigation.backLink?.action}
          $invisible={!navigation.backLink}
        >
          {navigation.backLink?.label || "Go Back"}
        </Button>

        <Button
          $variant="filled"
          disabled={!navigation.nextLink.enabled}
          onClick={navigation.nextLink.action}
        >
          {navigation.nextLink.label || "Next Step"}
        </Button>
      </Actions>
    </Container>
  );
};

export default StepLayout;

const Container = styled.section`
  padding: 48px 48px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    padding: 16px;
    border-radius: 12px;
    background-color: ${neutral.white};
    position: absolute;
    top: 100px;
    z-index: 10;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const Content = styled.div`
  h1 {
    font-size: 1.8rem;
    margin-block: 6px;
    color: ${primary.marineBlue};
  }

  p {
    color: ${neutral.coolGray};
    margin-block: 6px 20px;
  }
`;

const Actions = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${neutral.white};
    padding: 16px;
  }
`;

const Button = styled.button<{
  $variant: "text" | "filled";
  $invisible?: boolean;
}>`
  padding: 12px 20px;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 500;
  color: ${(props) =>
    props.$variant === "filled" ? neutral.white : neutral.coolGray};
  background-color: ${(props) =>
    props.$variant === "filled" ? primary.marineBlue : "inherit"};
  border: none;
  border-radius: 8px;

  visibility: ${(props) => (props.$invisible ? "hidden" : "visible")};

  &:hover {
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    background-color: ${(props) =>
      props.disabled ? "inherit" : "rgba(0,0,0,0.2)"};
  }

  &:disabled {
    color: ${neutral.lightGray};
  }
`;
