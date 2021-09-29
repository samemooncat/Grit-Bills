import styled from "styled-components";
import background from "../../assets/images/background_dashboard.png";
import backgroundMobile from "../../assets/images/background_dashboard_mobile.png";

export const StyledContainer = styled.div`
  width: 100%;
  background-image: url(${background});
  min-height: 100vh;
  background-size: 100% 100%;
  border: 1px solid green;
  @media (max-width: 768px) {
    background-image: url(${backgroundMobile});
  }
`;
