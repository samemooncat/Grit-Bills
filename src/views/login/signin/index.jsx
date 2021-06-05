import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

 const SigninSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
     .min(2, 'Password too short')
     .max(20, 'Password too long')
     .required('Pasword is required'),
 });

const SignIn = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      history.push('/dashboard');
    },
    validationSchema: SigninSchema,
    validateOnChange: false
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        title="Email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        size="big"
        width="100%"
        autoComplete="on"
        error={formik?.errors?.email}
      />
      <Input
        name="password"
        title="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        size="big"
        width="100%"
        error={formik?.errors?.password}
        autoComplete="off"
      />
      <Button size="large" color="orange" label="Sign in" />
    </form>
  );
};

export default SignIn;
