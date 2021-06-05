import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';

const SignUp = () => {
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
        autoComplete="off"
      />
      <Input
        name="repeatPassword"
        title="Repeat password"
        type="password"
        size="big"
        width="100%"
        autoComplete="off"
      />
      <Button size="large" color="orange" label="Sign up" />
    </form>
  );
};

export default SignUp;
