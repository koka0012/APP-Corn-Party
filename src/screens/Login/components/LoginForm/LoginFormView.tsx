import Form from 'components/Form';
import TextInput from 'components/Form/TextInput';
import { FormikProps } from 'formik';
import isHigherVersion from 'lib/isHigherVersion';
import * as React from 'react';
import { Platform } from 'react-native';
import { Button } from 'react-native-paper';

import { initialValues } from '../../container/LoginFormContainer';

export default (props: FormikProps<typeof initialValues>) => (
  <Form>
    <TextInput
      label="Email"
      mode="outlined"
      name="email"
      type="email"
      errors={props.errors}
      toucheds={props.touched}
      autoFocus
    />
    <TextInput
      label="Senha"
      mode="outlined"
      name="password"
      type="password"
      errors={props.errors}
      toucheds={props.touched}
      textContentType={
        Platform.OS === "ios"
          ? isHigherVersion(12)
            ? "newPassword"
            : isHigherVersion(11)
            ? "password"
            : undefined
          : "password"
      }
    />
    <Button mode="contained" onPress={props.submitForm}>
      Entrar
    </Button>
  </Form>
);
