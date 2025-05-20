import { Box, styled } from "@mui/material";
import Colors from "./constant/colors";

export const AppContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  background: Colors.teal.lightest,
  borderRadius: "20px",
  height: "100vh",
  gap: '2vh',
  overflow: 'auto'
});

