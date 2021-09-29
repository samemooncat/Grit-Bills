import React from "react";
import PropTypes from "prop-types";
import {
  StyledContainer,
  StyledHeader,
  StyledIcon,
  StyledTitle,
} from "./styles";

const Card = ({ children, blue, yellow, red }) => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledIcon></StyledIcon>
        <StyledTitle></StyledTitle>
      </StyledHeader>
      {children}
      {true && (
        <div style={{}}>
          <p>here I/dwadaw</p>
        </div>
      )}
    </StyledContainer>
  );
};

Card.defaultProps = {
  blue: true,
  yellow: false,
  red: false,
};

Card.propTypes = {
  blue: PropTypes.bool,
  yellow: PropTypes.bool,
  red: PropTypes.bool,
};

export default Card;
