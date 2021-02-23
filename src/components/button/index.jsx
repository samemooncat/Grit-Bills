import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonComponent} from 'semantic-ui-react'

const Button = ({size, color, label, width, icon }) => {
    return(
        <div>
            <ButtonComponent size={size} color={color} width={width} icon={icon}>{label}</ButtonComponent>
        </div>
    );
};

Button.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired

};

export default Button;