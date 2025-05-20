import { styled, TextField } from "@mui/material";
import Colors from "../../constant/colors";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    "& fieldset": {
      borderColor: Colors.teal.default,
    },
    "&:hover fieldset": {
      borderColor: Colors.teal.default,
    },
    "&.Mui-focused fieldset": {
      borderColor: Colors.teal.default,
    },
  },
  "& .MuiFormHelperText-root": {
    color: "red",
  },
  "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
    borderColor: "#c4c4c4",
  },
  "& .Mui-disabled:hover fieldset": {
    borderColor: "#c4c4c4",
  },

  "& .Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "",
  },
  "& .Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    color: "",
  },
}));