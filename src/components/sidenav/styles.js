import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  padding-top: 50px;
  & .gritBillsLogoMobile {
    display: none;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 768px) {
    width: 65px;
    & .gritBillsLogoMobile {
      display: block;
    }
    & .gritBillsLogo {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.white};
  width: 100%;
  display: block;
  height: 40px;
  padding: 5px 0;
  font-size: 20px;
  &:hover {
    color: ${(props) => props.theme.white};
  }
  & p {
    display: inline;
    margin: 0;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  padding: 0 10px;
`;

export const StyledItem = styled.li`
  padding-left: 20px;
  margin-bottom: 10px;
  width: 100%;
  text-align: start;
  border-radius: 3px;
  background-color: ${(props) =>
    props.active ? props.theme.red : "transparent"};
  &:hover {
    background-color: ${(props) => props.theme.red};
  }
  & i.icon {
    margin-right: 10px;
    @media (max-width: 768px) {
      margin-top: 5px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 10px;
  }
`;
