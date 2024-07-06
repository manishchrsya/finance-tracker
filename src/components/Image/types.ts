import { ComponentProps } from "react";
import { CSSProperties } from "styled-components";

export interface IImage extends ComponentProps<"img"> {
  src: string;
  style?: CSSProperties;
}
