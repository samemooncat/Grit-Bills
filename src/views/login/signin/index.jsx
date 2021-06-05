import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';

const SignIn = () => {
  return (
    <form onSubmit={() => {}}>
      <Input
        name="email"
        title="Email"
        type="email"
        size="big"
        width="100%"
        autoComplete="on"
      />
      <Input
        name="password"
        title="Password"
        type="password"
        size="big"
        width="100%"
      />
      <Button size="large" color="orange" label="Sign in" autoComplete="off" />
    </form>
  );
};

export default SignIn;
