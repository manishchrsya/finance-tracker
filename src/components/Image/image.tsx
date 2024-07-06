import type { IImage } from "./types";

import { FC } from "react";
import styled from "styled-components";

const Image = styled.img``;

export const ImageComponent: FC<IImage> = ({ src, style, ...props }) => {
  return <Image src={src} style={style} {...props} />;
};
