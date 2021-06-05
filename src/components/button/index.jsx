import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ size, label, width, icon, red, blue, yellow }) => {
  return (
    <StyledButton
      fluid
      red={red}
      blue={blue}
      yellow={yellow}
      size={size}
      width={width}
      icon={icon}
    >
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  fluid: false,
  size: 'large',
  red: true,
  blue: false,
  yellow: false,
};

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  yellow: PropTypes.bool,
};

export default Button;
