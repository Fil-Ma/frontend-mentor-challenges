import { PageContainer } from "@components/MultiStepForm/atoms";
import MultiStepFormProvider from "@components/MultiStepForm/MultiStepFormContext";
import { MultiStepFormLayout } from "@components/MultiStepForm/MultiStepFormLayout";
import AddOns from "@components/MultiStepForm/Steps/AddOns";
import PersonalInfo from "@components/MultiStepForm/Steps/PersonalInfo";
import SelectPlan from "@components/MultiStepForm/Steps/SelectPlan";
import Summary from "@components/MultiStepForm/Steps/Summary";
import ThankYou from "@components/MultiStepForm/Steps/ThankYou";
import { TSteps, STEPS } from "@components/MultiStepForm/types";
import { useState } from "react";

const steps: TSteps = {
  [STEPS.YOUR_INFO]: {
    label: "your info",
    Component: PersonalInfo,
  },
  [STEPS.SELECT_PLAN]: {
    label: "select plan",
    Component: SelectPlan,
  },
  [STEPS.ADD_ONS]: {
    label: "add-ons",
    Component: AddOns,
  },
  [STEPS.SUMMARY]: {
    label: "summary",
    Component: Summary,
  },
  [STEPS.THANK_YOU]: {
    label: "thank you",
    Component: ThankYou,
  },
};

const stepsEntries = Object.entries(steps).filter(
  ([k]) => k !== STEPS.THANK_YOU,
);

const FormContainer = () => {
  const [step, setStep] = useState<STEPS>(STEPS.YOUR_INFO);

  const onChangeStep = (s: STEPS) => setStep(s);

  const asideSteps = stepsEntries.map(([key, val]) => {
    const disabled = false; // TODO perform validation
    const active =
      key === STEPS.SUMMARY
        ? step === STEPS.SUMMARY || step === STEPS.THANK_YOU
        : key === step;

    const onClick = () => {
      if (disabled) return;
      setStep(key as STEPS);
    };
    return {
      label: val.label,
      onClick,
      active,
      disabled,
    };
  });

  const { Component } = steps[step];
  return (
    <PageContainer>
      <MultiStepFormLayout steps={asideSteps}>
              <Component onChangeStep={onChangeStep} />

      </MultiStepFormLayout>
    </PageContainer>
  );
};

const MultiStepForm = () => {
  return (
    <MultiStepFormProvider>
      <FormContainer />
    </MultiStepFormProvider>
  );
};

export default MultiStepForm;