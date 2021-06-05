
import styled from 'styled-components';
import background from '../../assets/images/background-login.jpeg';

export const StyledContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledFormContainer = styled.div`
    width: auto;
    height: auto;
    background: ${props => props.theme.background};
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledTitle = styled.h2`
    color: ${props => props.theme.white};
    font-weight: 100;
`;
