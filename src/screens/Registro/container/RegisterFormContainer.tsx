import { Formik } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as Yup from 'yup';

import { RootAction, RootState } from '../../../redux/redux';
import RegisterFormView from '../components/RegisterForm/RegisterFormView';
import { register } from '../redux/actions';

export const initialValues = {
  email: "",
  password: "",
  name: ""
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido!")
    .required("Preencha este campo!"),
  name: Yup.string().required("Preencha este campo!"),
  password: Yup.string().required("Preencha este campo!")
});

export interface RegisterFormContainerProps {
  register: typeof register;
  loading: boolean;
}

const RegisterFormContainer = ({
  register,
  loading
}: RegisterFormContainerProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={register}
  >
    {props => <RegisterFormView {...props} loading={loading} />}
  </Formik>
);

const mapStateToProps = (state: RootState, ownProps: {}) => ({
  loading: state.register.loading
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
  register: bindActionCreators(register, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormContainer);
