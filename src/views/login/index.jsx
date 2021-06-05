import React from "react";
import { StyledContainer, StyledFormContainer, StyledTitle } from './styles';
import Tab from './tab';

const Login = () => {

    return (
        <StyledContainer>
            <StyledFormContainer>
                <StyledTitle>Welcome!</StyledTitle>
                <Tab />
            </StyledFormContainer>
        </StyledContainer>
    );
};


export default Login;