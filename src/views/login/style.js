
import styled from 'styled-components';
import background from '../../assets/images/background-login.jpeg'

export const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledContainer = styled.div`
    width: 60%;
    background: #212121;
    border-radius: 16px;
    height: 550px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const StyledImageContainer = styled.div`
    width: 50%;
    height: 90%;
    background-color: #2c313a;
    border-radius: 10px;
`;

export const StyledFormContainer = styled.div`
    width: 50%;
    height: 90%;
`;