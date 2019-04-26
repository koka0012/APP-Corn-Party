import { Formik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

import RegisterFormView from '../components/RegisterForm/RegisterFormView';

export const initialValues = {
  email: "",
  password: "",
  name: ""
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido!")
    .required("Preencha este campo!"),
  password: Yup.string().required("Preencha este campo!")
});

export default () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={console.log}
  >
    {RegisterFormView}
  </Formik>
);
