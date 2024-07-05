import type { IDropdown } from "./types";

import { FC } from "react";
import ReactSelect, { StylesConfig } from "react-select";

export const Dropdown: FC<IDropdown> = ({
  handleChangeCountry,
  options,
  value,
}) => {
  const customStyle: StylesConfig = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      height: 46,
      width: "100%",
      border: "2px solid #2F303D",
      borderRadius: 8,
      color: "#fff",
      "&:hover": {
        cursor: "pointer",
        borderColor: "hsla(232, 14%, 20%, 0.6)",
      },
    }),
    menu: (styles) => ({
      ...styles,
      background: "#171B2C",
      borderRadius: 8,
      border: "2px solid #2F303D",
      width: 800,
    }),
    input: (styles) => ({
      ...styles,
      "&:active": {
        borderColor: "hsla(232, 14%, 20%, 0.6)",
      },
    }),
    option: (styles) => {
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
      options={options}
      onChange={handleChangeCountry}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};
