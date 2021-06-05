import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledInputContainer } from './styles';

const Input = ({
  placeholder,
  size,
  type,
  title,
  name,
  value,
  width,
  autoComplete,
}) => {
  return (
    <StyledInputContainer>
      <label htmlFor={name}>{title}</label>
      <StyledInput
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        size={size}
        width={width}
        autoComplete={autoComplete}
      />
    </StyledInputContainer>
  );
};

Input.defaultProps = {
  placeholder: '',
  title: '',
  value: '',
  size: 'large',
  type: 'text',
  width: '235px',
  autoComplete: 'off',
};

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  autoComplete: PropTypes.string,
};

export default Input;
