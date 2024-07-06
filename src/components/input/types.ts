import { ChangeEvent, ComponentProps, HTMLInputTypeAttribute } from "react";

export interface IInput extends ComponentProps<"input"> {
  placeholder: string;
  value: string | number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: () => void;
  type: HTMLInputTypeAttribute;
  id: string;
  name: string;
  isError?: boolean;
  errorMessage?: string;
  autoFocus?: boolean;
}
