import type { IButton } from "./types";

import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { fontSize } from "variables";

const ButtonDiv = styled.button`
  font-size: var(${fontSize});
  cursor: pointer;
  background-color: #6359e9;
  border-radius: 8px;
  color: #ffffff;
  height: 48px;
  width: fit-content;
  padding: 4px 16px;
  border: none;
`;

export const Button: FC<PropsWithChildren<IButton>> = ({
  handleClick,
  children,
}) => {
  return <ButtonDiv onClick={handleClick}>{children}</ButtonDiv>;
};
