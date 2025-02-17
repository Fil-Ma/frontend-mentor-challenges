import styled from "styled-components";
import { useMultiStepFormContext } from "../MultiStepFormContext";
import { STEPS, TBaseStepProps } from "../types";
import StepLayout from "./StepLayout";
import { HTMLProps, useEffect, useState } from "react";
import colors from "@constants/colors";
import { personalInfoSchema } from "../state/schema";

const { primary, neutral } = colors["multi-step-form"];

type TInputs = "name" | "email" | "phone";

const initialErrorState = {
  name: "",
  email: "",
  phone: "",
};

interface IProps extends TBaseStepProps {}

const PersonalInfo = ({ onChangeStep }: IProps) => {
  const { state, dispatch } = useMultiStepFormContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] =
    useState<Record<TInputs, string>>(initialErrorState);

  const onChange =
    (inputType: TInputs) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;

      dispatch({
        type: STEPS.YOUR_INFO,
        payload: {
          [inputType]: newValue,
        },
      });

      switch (inputType) {
        case "email":
          setEmail(newValue);
          break;
        case "phone":
          setPhone(newValue);
          break;
        case "name":
          setName(newValue);
          break;
        default:
          break;
      }
    };

  const checkIsValid = () => {
    try {
      personalInfoSchema.validateSync(
        {
          name,
          email,
          phone,
        },
        { abortEarly: false },
      );
      setError(initialErrorState);
      return true;
    } catch (err: any) {
      if (err?.inner && Array.isArray(err?.inner)) {
        const errors = err.inner.reduce(
          (acc: Record<TInputs, string>, e: any) => ({
            ...acc,
            [e.path]: e.message,
          }),
          {},
        );
        setError(errors);
        return false;
      }
    }
  };

  useEffect(() => {
    Object.entries(state[STEPS.YOUR_INFO]).forEach(([key, val]) => {
      switch (key) {
        case "email":
          setEmail(val);
          break;
        case "phone":
          setPhone(val);
          break;
        case "name":
          setName(val);
          break;
        default:
          break;
      }
    });
  }, []);

  const onSubmit = () => {
    dispatch({
      type: STEPS.YOUR_INFO,
      payload: {
        name,
        email,
        phone,
      },
    });
  };

  const inputs: {
    name: TInputs;
    value: string;
    label: string;
    placeholder: string;
    type: string;
    autoComplete: string;
  }[] = [
    {
      value: name,
      name: "name",
      label: "Name",
      type: "text",
      autoComplete: "name",
      placeholder: "e.g. Stephen King",
    },
    {
      value: email,
      name: "email",
      label: "Email",
      type: "email",
      autoComplete: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      value: phone,
      name: "phone",
      label: "Phone Number",
      type: "tel",
      autoComplete: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <StepLayout
      title="Personal info"
      subTitle="Please provide your name, email address, and phone number."
      navigation={{
        nextLink: {
          enabled: true,
          action: () => {
            const isValid = checkIsValid();
            if (!isValid) return;
            onSubmit();
            onChangeStep(STEPS.SELECT_PLAN);
          },
        },
      }}
    >
      {inputs.map(({ name, ...rest }) => (
        <CustomInput
          key={name}
          name={name}
          onChange={onChange(name)}
          errorMessage={error[name]}
          {...rest}
        />
      ))}
    </StepLayout>
  );
};

export default PersonalInfo;

const InputContainer = styled.div`
  margin-bottom: 12px;

  .input-error-message {
    color: red;
    font-size: 0.8rem;
    margin-block: 6px;
    line-height: 0.8rem;
  }
`;

const StyledLabel = styled.label`
  margin-bottom: 4px;
  color: ${primary.marineBlue};
  display: block;
`;

const StyledInput = styled.input`
  border: 1px solid ${neutral.coolGray};
  background: inherit;
  font-size: 1.1rem;
  padding: 12px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  errorMessage: string;
}

const CustomInput = ({ name, label, errorMessage, ...props }: InputProps) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledInput id={name} name={name} {...props} />
      {errorMessage && <p className="input-error-message">{errorMessage}</p>}
    </InputContainer>
  );
};
