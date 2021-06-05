import React from 'react';
import Button from '../../../components/button/index';
import Input from '../../../components/input/index';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

 const SignupSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
     .min(2, 'Password too short')
     .max(20, 'Password too long')
     .required('Pasword is required'),
   repeatPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], "Passwords don't match")
     .required('Repeat password is required'),
 });

const SignUp = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: (values) => {
      history.push('/');
    },
    validationSchema: SignupSchema,
    validateOnChange: false,
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
        autoComplete="off"
        error={formik?.errors?.password}
      />
      <Input
        name="repeatPassword"
        title="Repeat password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
        size="big"
        width="100%"
        autoComplete="off"
        error={formik?.errors?.repeatPassword}
      />
      <Button size="large" color="orange" label="Sign up" />
    </form>
  );
};

export default SignUp;
