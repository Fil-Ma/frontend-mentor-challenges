import colors from "@constants/colors";
import { useMultiStepFormContext } from "../MultiStepFormContext";
import { STEPS, TBaseStepProps, TBilling } from "../types";
import StepLayout from "./StepLayout";
import styled from "styled-components";
import { defaultPlans } from "../constants/plans";
import React, { useMemo } from "react";
import { defaultServices } from "../constants/services";

const { primary, neutral } = colors["multi-step-form"];

interface IProps extends TBaseStepProps {}

const Summary = ({ onChangeStep }: IProps) => {
  const { state } = useMultiStepFormContext();

  const { billing, plan } = state[STEPS.SELECT_PLAN];

  const activePlan = useMemo(
    () => defaultPlans.find((p) => p.name === plan),
    [],
  );

  const activeServices = useMemo(
    () =>
      defaultServices.filter((s) => state[STEPS.ADD_ONS].services.has(s.name)),
    [],
  );

  const planPrice = activePlan?.price[billing] || 0;
  const addOnsCost = activeServices.reduce((acc, v) => {
    return acc + v.price[billing];
  }, 0);

  return (
    <StepLayout
      title="Finishing up"
      subTitle="Double-check everything looks OK before confirming."
      navigation={{
        backLink: {
          enabled: true,
          action: () => onChangeStep(STEPS.ADD_ONS),
        },
        nextLink: {
          enabled: true,
          label: "Confirm",
          action: () => {
            onChangeStep(STEPS.THANK_YOU);
          },
        },
      }}
    >
      <Details>
        <KeyVal val={planPrice} billing={billing} font="medium">
          <PlanLabel>
            <p>
              {activePlan?.name} ({billing})
            </p>
            <button onClick={() => onChangeStep(STEPS.SELECT_PLAN)}>
              Change
            </button>
          </PlanLabel>
        </KeyVal>
        {!!activeServices.length && <Divider />}
        {activeServices.map((s) => (
          <KeyVal
            key={s.name}
            val={s.price[billing]}
            billing={billing}
            font="light"
          >
            <p style={{ margin: 0 }}>{s.title}</p>
          </KeyVal>
        ))}
      </Details>
      <KeyVal val={planPrice + addOnsCost} billing={billing} font="large">
        <p style={{ margin: 0 }}>
          Total (per {billing === "monthly" ? "month" : "year"})
        </p>
      </KeyVal>
    </StepLayout>
  );
};

export default Summary;

const Details = styled.div`
  background-color: ${neutral.magnolia};
  border-radius: 4px;
  padding-block: 8px;
`;

type TFont = "light" | "medium" | "large";

const KeyValContainer = styled.div<{ $font: TFont }>`
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p:last-of-type {
    margin: 0;
    font-size: ${(props) => (props.$font === "large" ? "1.1rem" : "1rem")};
    line-height: 1.1rem;
    color: ${(props) =>
      props.$font === "large" ? primary.purpleBlue : primary.marineBlue};
    font-weight: ${(props) => (props.$font === "light" ? 400 : 600)};
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${neutral.lightGray};
  margin: 8px 24px;
`;

const PlanLabel = styled.div`
  p {
    color: ${primary.marineBlue};
    font-size: 1.1rem;
    line-height: 1.1rem;
    margin-inline: 0 8px;
    text-transform: capitalize;
  }

  button {
    color: ${neutral.coolGray};
    text-decoration: underline;
    border: none;
    background: inherit;
    padding: 2px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

const suffix = {
  monthly: "mo",
  yearly: "yr",
};

const KeyVal = ({
  val,
  font = "light",
  billing,
  children,
}: {
  val: number;
  font?: TFont;
  billing: TBilling;
  children: React.ReactNode;
}) => {
  return (
    <KeyValContainer $font={font}>
      {children}
      <p>
        +&#36;{val}/{suffix[billing]}
      </p>
    </KeyValContainer>
  );
};
