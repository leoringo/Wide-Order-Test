import { Box, styled, type SxProps } from "@mui/material";
import Colors from "../../constant/colors";

export const TitleContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  border: `1px solid ${Colors.orange.light}`,
  borderRadius: "20px",
  background: Colors.white,
  padding: "1rem",
});

export const sxTextTitle: SxProps = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: Colors.orange.default,
};

