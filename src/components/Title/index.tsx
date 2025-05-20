import React from "react";
import { TitleContainer, sxTextTitle } from "./style";
import TextStyle from "../TextStyle";

const Title: React.FC = () => {
  return (
    <TitleContainer>
      <TextStyle variant="h3" sx={sxTextTitle}>My Order List</TextStyle>
    </TitleContainer>
  );
};

export default Title;
