import React from "react";
import ContentWrapper from "./contentWrapper";
import Sidenav from "../../components/sidenav";

import { StyledContainer } from "./styles";

const Dashboard = () => {
  return (
    <StyledContainer>
      <Sidenav />
      <ContentWrapper />
    </StyledContainer>
  );
};

export default Dashboard;
