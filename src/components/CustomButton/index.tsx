import React from "react";
import Button, { type ButtonProps } from "@mui/material/Button";

interface CustomButtonProps extends ButtonProps {}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "text",
  ...props
}) => {
  return (
    <Button
      variant={variant}
      {...props}
      sx={{ width: "80px", borderRadius: "20px", ...props.sx }}
    />
  );
};

export default CustomButton;
