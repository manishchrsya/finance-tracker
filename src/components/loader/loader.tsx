import { FC } from "react";
import { RingLoader } from "react-spinners";
import { LoaderSizeProps } from "react-spinners/helpers/props";

export const Loader: FC<LoaderSizeProps> = ({
  color = "#6359e9",
  size = 80,
  ...props
}) => {
  return <RingLoader color={color} size={size} data-testid="loader" {...props} />;
};
