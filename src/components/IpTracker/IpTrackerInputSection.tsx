import styled from "styled-components";
import desktopBackground from "@assets/IpTracker/pattern-bg-desktop.png?inline";
import mobileBackground from "@assets/IpTracker/pattern-bg-mobile.png?inline";
import RightArrow from "@assets/IpTracker/icon-arrow.svg?react";
import colors from "@constants/colors";
import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import IpTrackerResults from "./IpTrackerResults";
import { IPSubmitHandler, ResultsObject, TMapPosition } from "./types";
import { getIpData } from "./getIpData";
import { isValidIPv4 } from "./validateIp";
import throttle from "lodash.throttle";

const {
  gray: { dark, main },
} = colors["ip-tracker"];

const IpTrackerInputSection = ({
  onSubmit,
}: {
  onSubmit: (value: TMapPosition) => void;
}) => {
  const [data, setData] = useState<ResultsObject>({
    ipAddress: "",
    location: "",
    timezone: "",
    isp: "",
  });

  const getCoordinates: IPSubmitHandler = async (ipValue) => {
    const [position, results] = await getIpData(ipValue);
    setData(results);
    onSubmit(position);
  };

  return (
    <Section>
      <h1>IP Address Tracker</h1>
      <IPInput
        placeholder="Search for any IP address or domain"
        handleSubmit={getCoordinates}
      />
      <IpTrackerResults results={data} />
    </Section>
  );
};

export default IpTrackerInputSection;

const Section = styled.section`
  background: url("${desktopBackground}");
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;
  padding: 0 16px 100px;
  position: relative;

  h1 {
    color: white;
    margin: 0;
    padding: 16px 0;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    padding-bottom: 170px;
    background: url("${mobileBackground}");
  }
`;

const StyledForm = styled.form`
  width: 500px;
  margin: 0 auto;

  div:first-of-type {
    width: 100%;
    display: inline-flex;
    align-items: stretch;
    border-radius: 8px;
    overflow: hidden;
  }

  input {
    background-color: white;
    flex-grow: 1;
    border: none;
    padding: 12px 20px;
  }

  p {
    font-size: 0.9rem;
    margin: 8px 0;
    color: red;
    text-align: left;
  }

  @media (max-width: 650px) {
    width: 300px;
  }
`;

const SubmitButton = styled.button`
  padding: 16px 20px;
  background: ${dark};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${main};
  }
`;

interface IPInputProps extends React.HTMLProps<HTMLInputElement> {
  handleSubmit: IPSubmitHandler;
}

const IPInput = ({ handleSubmit, ...props }: IPInputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = useCallback(throttle(handleSubmit, 5000), []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (error) return;
    await submitHandler(value);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    const isValid = isValidIPv4(value);
    if (isValid || !value) {
      setError("");
    } else {
      setError("Invalid IP Address");
    }
  }, [value]);

  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        <input {...props} value={value} onChange={onChange} />
        <SubmitButton type="submit" disabled={!!error}>
          <RightArrow />
        </SubmitButton>
      </div>
      {error && <p>{error}</p>}
    </StyledForm>
  );
};
