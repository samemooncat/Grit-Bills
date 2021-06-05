import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';

const SignUp = () => {
  return (
    <>
      <Input name="email" title="Email" type="email" size="big" width={300} />
      <Input
        name="password"
        title="Password"
        type="password"
        size="big"
        width={300}
      />
      <Input
        name="repeatPassword"
        title="Repeat password"
        type="password"
        size="big"
        width={300}
      />
      <Button size="large" color="orange" label="Sign In" />
    </>
  );
};

export default SignUp;
