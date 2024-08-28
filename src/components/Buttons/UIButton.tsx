"use client";

import React, {PropsWithChildren, ReactNode} from "react";
import Button from "@mui/material/Button";
import {styled, Theme} from "@mui/material/styles";
import {SxProps} from "@mui/system/styleFunctionSx";
import {isRoundedBorders} from "@/const/values";
import {UISizes} from "@/types/types";

type UIButtonProps = {
  variant: "primary" | "secondary" | "territory"
  size?: UISizes
  onClick?: () => void
  sx?: SxProps<Theme>
  disabled?: boolean
  type?: "submit" | "reset" | "button" | undefined
  fullWidth?: boolean
  children: ReactNode
}

type MatButtonVariants = "contained" | "outlined";

const UIButton: React.FC<UIButtonProps> = (props: PropsWithChildren<UIButtonProps>) => {
  const {variant, size, children, sx, disabled, type, fullWidth} = props;

  const matVariant: MatButtonVariants | undefined = variant === "primary" ? "contained" :
    variant === "secondary" ? "outlined" : undefined;

  const color = variant !== "territory" ? variant : undefined;

  const MUIButton = styled(Button)(() => ({
    textTransform: "capitalize",
  }));

  const territorySX: SxProps<Theme> = variant === "territory" ? {
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "transparent",
    }
  } : {};

  const handleOnClick = () => {
    props.onClick && props.onClick();
  }

  return (
    <MUIButton
      sx={{
        borderRadius: isRoundedBorders ? "3em" : 0,
        ...territorySX,
        ...sx
      }}
      disabled={disabled}
      onClick={handleOnClick}
      color={color} size={size} variant={matVariant}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </MUIButton>
  )
};

export default UIButton;
