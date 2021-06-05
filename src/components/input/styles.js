import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

export const StyledInput = styled(Input)`
  &.ui.input {
    width: ${(props) => props.width};
  }

  &.ui.input > input {
    background-color: ${(props) => props.theme.darkGrey};
    border-color: ${(props) => props.theme.lightGrey};
    width: ${(props) => props.width};
    border-radius: 5px;
    border-width: 3px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.white};
`;