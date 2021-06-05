import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = ({ size, label, width, icon, red, blue, yellow, type }) => {
  return (
    <StyledButton
      fluid
      red={String(red)}
      blue={String(blue)}
      yellow={String(yellow)}
      size={size}
      width={width}
      icon={icon}
      type={type}
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
  type: 'submit',
};

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  yellow: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
