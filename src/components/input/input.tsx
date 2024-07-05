import { FC } from "react";
import { IInput } from "./types";
import styled from "styled-components";

const TextField = styled.div``;

const Input = styled.input`
  width: 100%;
  height: 46px;
  border: 2px solid gray;
  outline: none;
  background: transparent;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    border-color: #6359e9;
  }
`;

const ErrorMessage = styled.span`
  font-size: 8px;
  color: red;
`;

export const InputField: FC<IInput> = ({
  handleChange,
  id,
  name,
  placeholder,
  inputRef,
  type,
  value,
  isError,
  errorMessage,
}) => {
  const handleBlur = () => {};
  return (
    <TextField>
      <Input
        type="text"
        value={value}
        ref={inputRef}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </TextField>
  );
};
