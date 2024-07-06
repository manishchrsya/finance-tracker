import type { IFormField } from "../types";

import { useCallback } from "react";
import { Dropdown } from "components/select/select";
import { InputField } from "components/input";

export const useGetTransactions = () => {
  const getFormFields = useCallback(
    (formField: IFormField, ref: any, onChange: any) => {
      console.log("formField", formField);
      switch (formField.component) {
        case "select":
          return <Dropdown handleChange={() => {}} options={[]} value={{}} />;
        case "input":
          return (
            <InputField
              handleChange={() => {}}
              id=""
              inputRef={ref}
              name=""
              placeholder=""
              type={"text"}
              value={""}
            />
          );
        default:
          return (
            <InputField
              handleChange={() => {}}
              id=""
              inputRef={ref}
              name=""
              placeholder=""
              type={"text"}
              value={""}
            />
          );
      }
    },
    []
  );

  return { getFormFields };
};
