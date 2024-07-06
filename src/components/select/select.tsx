import type { IDropdown } from "./types";

import { FC } from "react";
import ReactSelect, { StylesConfig } from "react-select";

export const Dropdown: FC<IDropdown> = ({ handleChange, options, value }) => {
  const customStyle: StylesConfig = {
    control: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      height: 46,
      width: 300,
      border: `2px solid ${state.isFocused ? "#6359e9" : "#2F303D"}`,
      borderRadius: 4,
      outline: "none",
      boxShadow: "none",
      color: "#ffffff",
      "&:hover": {
        cursor: "pointer",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#ffffff",
    }),
    menu: (styles: any) => ({
      ...styles,
      background: "#171B2C",
      borderRadius: 8,
      border: "2px solid #2F303D",
    }),
    placeholder: (styles: any) => ({
      ...styles,
      width: "100%",
      color: "#ffffff",
    }),
    option: (styles: any) => {
      return {
        ...styles,
        backgroundColor: "#171B2C",
        color: "#FFF",
        cursor: "pointer",
        borderBottom: "1px solid #2F303D",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        },
        "&:active": {
          backgroundColor: "#0c87fd",
        },
        "&:last-child": {
          borderBottom: "none",
        },
      };
    },
  };

  return (
    <ReactSelect
      defaultValue={options[0]}
      value={value[0]}
      className="dropdown"
      styles={customStyle}
      isSearchable={false}
      options={options}
      onChange={handleChange}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};
