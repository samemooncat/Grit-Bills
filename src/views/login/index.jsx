import React, { useState } from "react";
import Button from "../../components/button/index";
import Input from "../../components/input/index";
import { StyledBody, StyledContainer, StyledFormContainer, StyledImageContainer } from "./style";


const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="container-signin__form">
            <Input value={email} type="text" placeholder="Email" size="large" />
            <Input value={password} type="password" placeholder="Password" size="large" />
            <Button size="large" color="orange" label="Sign In" />
        </div>
    )
}

const Login = (props) => {

    return (
        <StyledBody>
            <StyledContainer>
                <StyledImageContainer />
                <StyledFormContainer>
                    <SignIn />
                </StyledFormContainer>
            </StyledContainer>
        </StyledBody>
    );
};


export default Login;