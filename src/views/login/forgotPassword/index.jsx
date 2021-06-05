import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const ForgotPassword = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      history.push('/');
    },
    validationSchema: ForgotPasswordSchema,
    validateOnChange: false,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        title="Enter your email address"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        size="big"
        width="100%"
        autoComplete="on"
        error={formik?.errors?.email}
      />
      <Button size="large" color="orange" label="Send password reset email" />
    </form>
  );
};

export default ForgotPassword;
