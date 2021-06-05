import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';

export const StyledTab = styled(Tab)`
  .ui.segment {
    background: transparent;
  }

  .ui.secondary.pointing.menu .item {
    font-size: 20px;
    font-weight: 100;
    padding-left: 5px;
    padding-right: 5px;
    padding-bottom: 10px;
    margin-right: 20px;
    color: ${(props) => props.theme.lightGrey};
  }

  .ui.secondary.pointing.menu .item:hover {
    color: ${(props) => props.theme.white};
  }

  .ui.secondary.pointing.menu .item.active {
    color: ${(props) => props.theme.yellow};
    border-color: ${(props) => props.theme.yellow};
    border-width: 3px;
  }
`;
