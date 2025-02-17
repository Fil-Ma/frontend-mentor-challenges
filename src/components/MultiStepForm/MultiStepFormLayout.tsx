import colors from "@constants/colors";
import useIsMobile from "@hooks/useIsMobile";
import styled from "styled-components";
import desktopBackground from "@assets/MultiStepForm/bg-sidebar-desktop.svg?inline";
import mobileBackground from "@assets/MultiStepForm/bg-sidebar-mobile.svg?inline";

const { neutral, primary } = colors["multi-step-form"];

type TAsideSteps = {
  label: string;
  onClick: () => void;
  active: boolean;
};

export const MultiStepFormLayout = ({
  steps,
  children,
}: {
  steps: TAsideSteps[];
  children: React.ReactNode;
}) => {
  const isMobile = useIsMobile(600);

  const renderStep = (step: TAsideSteps, index: number) => {
    const { label, onClick, active } = step;

    return (
      <Step key={label} $active={active} onClick={onClick}>
        <p className="step-number">{index + 1}</p>
        {!isMobile && (
          <div className="step-label">
            <p>STEP {index + 1}</p>
            <p>{label}</p>
          </div>
        )}
      </Step>
    );
  };

  if (isMobile) {
    return (
      <>
        <Aside>{steps.map(renderStep)}</Aside>
        {children}
      </>
    );
  }
  return (
    <FormContainer>
      <Aside>{steps.map(renderStep)}</Aside>
      {children}
    </FormContainer>
  );
};

const FormContainer = styled.div`
  width: 90%;
  padding: 12px;
  border-radius: 12px;
  background-color: ${neutral.white};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  max-width: 900px;
`;

const Aside = styled.aside`
  padding: 32px;
  border-radius: 12px;
  background: url("${desktopBackground}");
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    padding-right: 84px;
    height: 500px;
  }

  @media (max-width: 600px) {
    background: url("${mobileBackground}");
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: flex-start;
    justify-content: center;
    height: 108px;
    border-radius: 0;
  }
`;

const Step = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 32px;

  @media (max-width: 600px) {
    padding: 0;
  }

  p {
    margin: 0;
  }

  .step-number {
    border: 1px solid ${primary.lightBlue};
    border-radius: 50%;
    background-color: ${(props) =>
      props.$active ? primary.lightBlue : "inherit"};
    color: ${(props) => (props.$active ? "black" : neutral.white)};
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 1.1rem;
    transition:
      background-color 200ms ease-in,
      color 200ms ease-in;

    ${(props) =>
      !props.$active &&
      `
      &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
      `}
  }

  .step-label {
    color: white;
    text-transform: uppercase;
    font-weight: 500;

    p:first-of-type {
      color: ${primary.lightBlue};
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
`;
