import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';

const ForgotPassword = () => {
  return (
    <>
      <Input
        name="email"
        title="Enter your email address"
        type="email"
        size="big"
        width="100%"
      />
      <Button size="large" color="orange" label="Send password reset email" />
    </>
  );
};

export default ForgotPassword;
