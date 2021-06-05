import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledInputContainer } from './styles';

const Input = ({ placeholder, size, type, title, name, value, width }) => {
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
  width: 235,
};

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
};

export default Input;
