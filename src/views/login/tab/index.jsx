import React from 'react';
import { StyledTab } from './styles';
import SignIn from '../signin';
import SignUp from '../signup';

const panes = [
  {
    menuItem: 'Sign In',
    render: () => (
      <StyledTab.Pane attached={false}>
        <SignIn />
      </StyledTab.Pane>
    ),
  },
  {
    menuItem: 'Sign Up',
    render: () => (
      <StyledTab.Pane attached={false}>
        <SignUp />
      </StyledTab.Pane>
    ),
  },
];

const Tab = () => {
  return (
    <StyledTab menu={{ secondary: true, pointing: true }} panes={panes} />
  );
};

export default Tab;