import CircularProgress from "@mui/material/CircularProgress";
import CircularProgressNext from "@mui/material-next/CircularProgress";
import React, {PropsWithChildren} from "react";
import {CssVarsProvider} from "@mui/material-next/styles";

type InProgressCircleProps = {
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit"
  size?: "small" | "medium" | "large"
  fourColor?: boolean
}

const progressSizes = {
  small: 15,
  medium: 25,
  large: 45,
}

const LoadingCircle: React.FC<InProgressCircleProps> = (props: PropsWithChildren<InProgressCircleProps>) => {

  const {size, color, fourColor} = props;

  /**
   * CssVarsProvider is for the MD3 styles.
   * https://m3.material.io/
   */
  if (fourColor) {
    return (
      <CssVarsProvider>
        <CircularProgressNext
          size={progressSizes[size || "medium"]}
          fourColor
        />
      </CssVarsProvider>
    )
  }

  return (
    <CircularProgress
      size={progressSizes[size || "medium"]}
      color={color || "info"}
    />
  );
};

export default LoadingCircle;
