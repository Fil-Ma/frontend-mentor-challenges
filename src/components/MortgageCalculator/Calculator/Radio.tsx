import { HTMLProps } from "react";
import styled from "styled-components";
import colors from "@constants/colors";

const { primary, neutral } = colors["mortgage-calculator"];

interface RadioProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

const Radio = ({ label, ...props }: RadioProps) => {
  const checked = Boolean(props.checked);
  return (
    <Container>
      <input type="radio" {...props} />
      <RadioElement $checked={checked}>
        <RadioCircle checked={checked} />
        <OptionLabel>{label}</OptionLabel>
      </RadioElement>
    </Container>
  );
};

export default Radio;

const Container = styled.label`
  input {
    display: none;
  }
`;

const RadioElement = styled.div<{ $checked: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid ${neutral.slate[700]};
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${primary.lightYellow};
  }

  ${(props) =>
    props.$checked &&
    `
    background-color: ${primary.lightYellow};
    border-color: ${primary.lime};
    `}
`;

const OptionLabel = styled.p`
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 500;
  color: ${neutral.slate[700]};
  margin: 0;
`;

const CircleContainer = styled.div<{ $checked: boolean }>`
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid
    ${(props) => (props.$checked ? primary.lime : neutral.slate[700])};
`;

const CircleCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${primary.lime};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

const RadioCircle = ({ checked }: { checked: boolean }) => {
  return (
    <CircleContainer $checked={checked}>
      {checked && <CircleCenter />}
    </CircleContainer>
  );
};
