import type { IButton } from "./types";

import { FC } from "react";
import styled from "styled-components";

const ButtonDiv = styled.button`
  font-size: 16px;
  background-color: #6359e9;
  border-radius: 8px;
  color: #ffffff;
  height: 48px;
  width: fit-content;
  padding: 4px 16px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

export const Button: FC<IButton> = ({ onClick, children, ...props }) => {
  return (
    <ButtonDiv onClick={onClick} {...props}>
      {children}
    </ButtonDiv>
  );
};
