import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput, StyledInputContainer } from './styles';

const Input = ({
  placeholder,
  size,
  type,
  onChange,
  title,
  name,
  value,
  width,
  autoComplete,
  error
}) => {
  return (
    <StyledInputContainer error={error ? true : false}>
      <label htmlFor={name}>{title}</label>
      <StyledInput
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        size={size}
        width={width}
        autoComplete={autoComplete}
        error={error ? true : false}
      />
      {error && <div>{error}</div>}
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
  error: ''
};

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  width: PropTypes.string,
  autoComplete: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
