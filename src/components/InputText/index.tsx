import React, { type ReactNode } from "react";
import { type TextFieldProps } from "@mui/material";
import { StyledTextField } from "./style";

type InputTextProps = TextFieldProps & {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isStartIconDisabled?: boolean;
  isEndIconDisabled?: boolean;
  onStartIconClick?: () => void;
  onEndIconClick?: () => void;
};

const InputText: React.FC<InputTextProps> = ({
  startIcon,
  endIcon,
  isEndIconDisabled = false,
  isStartIconDisabled = false,
  onStartIconClick,
  onEndIconClick,
  ...rest
}) => {
  return <StyledTextField {...rest} variant="outlined" />;
};

export default InputText;
