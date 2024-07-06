import { FC } from "react";
import { IInput } from "./types";
import styled from "styled-components";

const TextField = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  height: 46px;
  border: 2px solid #2f303d;
  outline: none;
  background: rgba(255, 255, 255, 0.03);
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    border-color: #6359e9;
  }
`;

const ErrorMessage = styled.div`
  font-size: 10px;
  color: red;
  width: 100%;
  position: absolute;
  top: 100%;
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
  autoFocus,
  handleBlur = () => {},
  ...props
}) => {
  return (
    <TextField>
      <Input
        type={type}
        value={value}
        ref={inputRef}
        placeholder={placeholder}
        name={name}
        id={id}
        autoFocus={autoFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </TextField>
  );
};
