import { Formik } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as Yup from 'yup';

import { RootAction, RootState } from '../../../redux/redux';
import LoginFormView from '../components/LoginForm/LoginFormView';
import { login } from '../redux/actions';

export const initialValues = {
  email: "",
  password: ""
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um email válido!")
    .required("Preencha este campo!"),
  password: Yup.string().required("Preencha este campo!")
});

export interface LoginFormContainerProps {
  login: typeof login;
  loading: boolean;
}

const LoginFormContainer = ({ login, loading }: LoginFormContainerProps) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={login}
  >
    {props => <LoginFormView {...props} loading={loading} />}
  </Formik>
);

const mapStateToProps = (state: RootState, ownProps: {}) => ({
  loading: state.login.loading
});

const mapActionToProps = (dispatch: Dispatch<RootAction>) => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(LoginFormContainer);
