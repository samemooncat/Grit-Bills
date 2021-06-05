import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const getButtonColor = (props) => {
  if (props.red) {
    return props.theme.red;
  } else if (props.blue) {
    return props.theme.blue;
  } else if (props.yellow) {
    return props.theme.yellow;
  } else {
    return props.theme.red;
  }
};

export const StyledButton = styled(Button)`
  &&.ui.button {
    background-color: ${(props) => getButtonColor(props)};
    color: ${(props) => props.theme.white};
    &:hover{
      opacity: 0.8;
    }
  }
`;