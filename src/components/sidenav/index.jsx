import React from "react";
import logo from "../../assets/images/grit_bills_logo.png";
import logoMobile from "../../assets/images/grit_bills_mobile.png";
import { StyledNav, StyledLink, StyledList, StyledItem } from "./styles";
import { Icon } from "semantic-ui-react";
import { isActiveRoute } from "../../utils";

const Sidenav = () => {
  return (
    <StyledNav>
      <img src={logo} className="gritBillsLogo" alt="grit bills logo" />
      <img src={logoMobile} className="gritBillsLogoMobile" alt="grit bills logo" />
      <StyledList>
        <StyledItem active={isActiveRoute(["/dashboard", "/dashboard/home"])}>
          <StyledLink to="/dashboard/home">
            <Icon name="home" />
            <p>Home</p>
          </StyledLink>
        </StyledItem>
        <StyledItem active={isActiveRoute(["/dashboard/bills"])}>
          <StyledLink to="/dashboard/bills">
            <Icon name="money bill alternate outline" />
            <p>Bills</p>
          </StyledLink>
        </StyledItem>
      </StyledList>
    </StyledNav>
  );
};

export default Sidenav;
