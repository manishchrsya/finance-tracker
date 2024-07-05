import { FC } from "react";
import styled from "styled-components";
import { IImage } from "./types";

const Image = styled.img``;

export const ImageComponent: FC<IImage> = ({ src, style }) => {
  return <Image src={src} style={style} />;
};
