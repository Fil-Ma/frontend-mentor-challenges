import { HelperText, InputLabel } from "./atoms";
import Radio from "./Radio";
import styled from "styled-components";
import { TRadioOption } from "../types";

const RadioForm = <T extends string>({
  options,
  value,
  onChange,
  error = "",
}: {
  options: TRadioOption<T>[];
  value: T | "";
  error?: string;
  onChange: (value: T) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <Wrapper>
      <InputLabel>Manage Type</InputLabel>
      {options.map(({ radioValue, radioLabel }) => (
        <Radio
          key={radioValue}
          checked={value === radioValue}
          label={radioLabel}
          onChange={onChange(radioValue)}
        />
      ))}
      {error && <HelperText $isError={!!error}>{error}</HelperText>}
    </Wrapper>
  );
};

export default RadioForm;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: stretch;
  justify-content: flex-start;
  margin-bottom: 32px;
`;
