import React from 'react';
import PropTypes from 'prop-types';
import { Input as InputComponent } from 'semantic-ui-react'

const Input = ({placeholder,size,type}) => {
    return(
    	<div>
            <InputComponent type={type} placeholder={placeholder} size={size}/>
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Input;