import { ChangeEvent } from "react";

export interface IInput {
  placeholder: string;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string | number;
  id: string;
  name: string;
  inputRef: any;
  isError?: boolean;
  errorMessage?: string;
}
