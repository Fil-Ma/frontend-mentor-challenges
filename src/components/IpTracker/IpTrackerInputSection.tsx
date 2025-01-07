import styled from "styled-components";
import desktopBackground from "@assets/IpTracker/pattern-bg-desktop.png?inline";
import mobileBackground from "@assets/IpTracker/pattern-bg-mobile.png?inline";
import RightArrow from "@assets/IpTracker/icon-arrow.svg?react";
import colors from "@constants/colors";
import React, { ChangeEvent, FormEvent, useState } from "react";
import IpTrackerResults from "./IpTrackerResults";
import { IPSubmitHandler, ResultsObject, TMapPosition } from "./types";
import { getIpData } from "./getIpData";

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
  display: inline-flex;
  align-items: stretch;
  width: 500px;
  border-radius: 8px;
  overflow: hidden;

  input {
    background-color: white;
    flex-grow: 1;
    border: none;
    padding: 12px 20px;
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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(value);
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <input {...props} value={value} onChange={onChange} />
      <SubmitButton type="submit">
        <RightArrow />
      </SubmitButton>
    </StyledForm>
  );
};
