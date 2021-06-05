import React from 'react';
import { StyledTab } from './styles';
import SignIn from '../signin';
import SignUp from '../signup';
import ForgotPassword from '../forgotPassword';

const panes = [
  {
    menuItem: 'Sign in',
    render: () => (
      <StyledTab.Pane attached={false}>
        <SignIn />
      </StyledTab.Pane>
    ),
  },
  {
    menuItem: 'Sign up',
    render: () => (
      <StyledTab.Pane attached={false}>
        <SignUp />
      </StyledTab.Pane>
    ),
  },
  {
    menuItem: 'Forgot password?',
    render: () => (
      <StyledTab.Pane attached={false}>
        <ForgotPassword />
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