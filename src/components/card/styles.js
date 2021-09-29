import styled from "styled-components";

export const StyledContainer = styled.div`
    width: 300px;
    height: 200px;
    background-color: ${props => props.theme.background};
    border-radius: 10px;
    border-left: 8px solid red;
`;
