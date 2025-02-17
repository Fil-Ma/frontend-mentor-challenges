import styled from "styled-components";
import { useMultiStepFormContext } from "../MultiStepFormContext";
import {
  STEPS,
  TBaseStepProps,
  TBilling,
  TPlan,
  TPlanCardAttributes,
} from "../types";
import StepLayout from "./StepLayout";
import colors from "@constants/colors";
import { useEffect, useState } from "react";
import { defaultPlans } from "../constants/plans";

const { primary, neutral } = colors["multi-step-form"];

interface IProps extends TBaseStepProps {}

const SelectPlan = ({ onChangeStep }: IProps) => {
  const { state, dispatch } = useMultiStepFormContext();
  const [billing, setBilling] = useState<TBilling>("monthly");
  const [plan, setPlan] = useState<TPlan>("arcade");

  const onSubmit = () => {
    dispatch({
      type: STEPS.SELECT_PLAN,
      payload: {
        plan,
        billing,
      },
    });
  };

  useEffect(() => {
    setPlan(state[STEPS.SELECT_PLAN].plan);
    setBilling(state[STEPS.SELECT_PLAN].billing);
  }, []);

  return (
    <StepLayout
      title="Select your plan"
      subTitle="You have the option of monthly or yearly billing."
      navigation={{
        backLink: {
          enabled: true,
          action: () => onChangeStep(STEPS.YOUR_INFO),
        },
        nextLink: {
          enabled: true,
          action: () => {
            onSubmit();
            onChangeStep(STEPS.ADD_ONS);
          },
        },
      }}
    >
      <CardsContainer>
        {defaultPlans.map((p) => (
          <PlanCard
            key={p.name}
            {...p}
            onClick={() => setPlan(p.name)}
            selected={p.name === plan}
            billing={billing}
          />
        ))}
      </CardsContainer>
      <BillingSwitch value={billing} onChange={(val) => setBilling(val)} />
    </StepLayout>
  );
};

export default SelectPlan;

const CardsContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const StyledCard = styled.li<{ $selected: boolean }>`
  flex: 1;
  border: 1px solid
    ${(props) => (props.$selected ? primary.purpleBlue : "rgba(0, 0, 0, 0.4)")};
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 600px) {
    flex-direction: row;
    gap: 16px;
    align-items: center;
  }

  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
  }

  p {
    margin-block: 0 4px;
    font-size: 0.9rem;
    line-height: 1rem;
    color: ${neutral.coolGray};
  }

  p:first-of-type {
    color: ${primary.marineBlue};
    font-weight: 500;
    text-transform: capitalize;
    font-size: 1.1rem;
    line-height: 1.1rem;
  }

  .plan-caption {
    color: ${primary.marineBlue};
  }
`;

const suffix = {
  monthly: "mo",
  yearly: "yr",
};

interface PlanCardProps extends TPlanCardAttributes {
  selected: boolean;
  billing: TBilling;
  onClick: VoidFunction;
}

const PlanCard = ({
  selected,
  imageSrc,
  name,
  price,
  billing,
  onClick,
}: PlanCardProps) => {
  return (
    <StyledCard $selected={selected} onClick={onClick}>
      <img src={imageSrc} alt="" />
      <div>
        <p>{name}</p>
        <p>
          &#36;{price[billing]}/{suffix[billing]}
        </p>
        {billing === "yearly" && <p className="plan-caption">2 months free</p>}
      </div>
    </StyledCard>
  );
};

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  p {
    margin: 0;
  }
`;

const Switch = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 45px;
  height: 22px;
  padding: 3px;
  background-color: ${primary.marineBlue};
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Knob = styled.div<{ $isOn: boolean }>`
  position: absolute;
  top: 50%;
  ${({ $isOn }) => ($isOn ? "right: 4px" : "left: 4px")};
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  background-color: white;
  border-radius: 50%;
  transition: left 0.3s ease;
`;

const BillingSwitch = ({
  value,
  onChange,
}: {
  value: TBilling;
  onChange: (v: TBilling) => void;
}) => {
  const toggleSwitch = () => {
    onChange(value === "monthly" ? "yearly" : "monthly");
  };

  return (
    <SwitchContainer>
      <p>Monthly</p>
      <Switch onClick={toggleSwitch}>
        <Knob $isOn={value === "yearly"} />
      </Switch>
      <p>Yearly</p>
    </SwitchContainer>
  );
};
