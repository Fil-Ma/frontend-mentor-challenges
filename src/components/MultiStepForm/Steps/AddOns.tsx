import styled from "styled-components";
import { useMultiStepFormContext } from "../MultiStepFormContext";
import { STEPS, TAddOns, TBaseStepProps } from "../types";
import StepLayout from "./StepLayout";
import colors from "@constants/colors";
import { useCallback, useEffect, useRef, useState } from "react";
import { defaultServices } from "../constants/services";

const { primary, neutral } = colors["multi-step-form"];

const suffix = {
  monthly: "mo",
  yearly: "yr",
};

interface IProps extends TBaseStepProps {}

const AddOns = ({ onChangeStep }: IProps) => {
  const { state, dispatch } = useMultiStepFormContext();
  const servicesSet = useRef<Set<TAddOns>>(new Set());
  const [activeServices, setActiveServices] = useState(defaultServices);

  const updateList = useCallback((servicesList: Set<TAddOns>) => {
    setActiveServices((prev) =>
      prev.map((s) => ({
        ...s,
        checked: servicesList.has(s.name),
      })),
    );
  }, []);

  const onSubmit = () => {
    dispatch({
      type: STEPS.ADD_ONS,
      payload: {
        services: servicesSet.current,
      },
    });
  };

  useEffect(() => {
    servicesSet.current = state[STEPS.ADD_ONS].services;
    updateList(servicesSet.current);
  }, []);

  const billing = state[STEPS.SELECT_PLAN].billing;

  const handleCheckboxChange = (name: TAddOns) => () => {
    if (servicesSet.current.has(name)) {
      servicesSet.current.delete(name);
    } else {
      servicesSet.current.add(name);
    }
    updateList(servicesSet.current);
  };

  return (
    <StepLayout
      title="Pick add-ons"
      subTitle="Add-ons help enhance your gaming experience."
      navigation={{
        backLink: {
          enabled: true,
          action: () => onChangeStep(STEPS.SELECT_PLAN),
        },
        nextLink: {
          enabled: true,
          action: () => {
            onSubmit();
            onChangeStep(STEPS.SUMMARY);
          },
        },
      }}
    >
      <List>
        {activeServices.map(({ name, price, title, checked, description }) => (
          <Card key={name} $active={checked}>
            <Checkbox checked={checked} onChange={handleCheckboxChange(name)} />
            <Content>
              <p>{title}</p>
              <p>{description}</p>
            </Content>
            <Price>
              +&#36;{price[billing]}/{suffix[billing]}
            </Price>
          </Card>
        ))}
      </List>
    </StepLayout>
  );
};

export default AddOns;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const Card = styled.li<{ $active: boolean }>`
  border: 1px solid
    ${(props) => (props.$active ? primary.purpleBlue : neutral.coolGray)};
  display: flex;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  padding: 16px;
  margin-bottom: 12px;
`;

const Content = styled.div`
  flex: 1;

  p {
    margin-block: 0;
    color: ${neutral.coolGray};
    font-size: 0.9rem;
    line-height: 0.9rem;
  }

  p:first-of-type {
    font-size: 1.1rem;
    line-height: 1.1rem;
    margin-bottom: 0.5rem;
    color: ${primary.marineBlue};
    font-weight: 500;
  }
`;

const Price = styled.p`
  color: ${primary.purpleBlue} !important;
  margin: 0 !important;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-color: ${(props) =>
    props.$checked ? primary.purpleBlue : neutral.coolGray};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) =>
    props.$checked ? primary.purpleBlue : "transparent"};

  &:hover {
    border-color: #6366f1;
  }
`;

const Checkmark = styled.div<{ $checked: boolean }>`
  width: 10px;
  height: 10px;
  background-color: white;
  clip-path: polygon(14% 44%, 0% 60%, 36% 95%, 100% 14%, 80% 0%, 37% 70%);
  visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
`;

const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: VoidFunction;
}) => {
  return (
    <CheckboxWrapper onClick={onChange}>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox $checked={checked}>
        <Checkmark $checked={checked} />
      </StyledCheckbox>
    </CheckboxWrapper>
  );
};
