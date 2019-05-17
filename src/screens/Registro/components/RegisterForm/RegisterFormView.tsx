import Form from 'components/Form';
import TextInput from 'components/Form/TextInput';
import { FormikProps } from 'formik';
import * as React from 'react';
import { Button } from 'react-native-paper';

import { initialValues } from '../../container/RegisterFormContainer';

export default (
  props: FormikProps<typeof initialValues> & { loading: boolean }
) => (
  <Form>
    <TextInput
      label="Nome"
      mode="outlined"
      name="name"
      type="text"
      errors={props.errors}
      toucheds={props.touched}
    />
    <TextInput
      label="Email"
      mode="outlined"
      name="email"
      type="email"
      errors={props.errors}
      toucheds={props.touched}
    />
    {/* <TextInput
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
    /> */}

    {/* <InputMask
      name="telefone"
      errors={props.errors}
      toucheds={props.touched}
      type="cel-phone"
      customTextInputProps={{
        label: "Telefone",
        mode: "outlined",
        textContentType: "telephoneNumber"
        // keyboardType: ""
      }}
    /> */}
    <TextInput
      label="Telefone"
      mode="outlined"
      name="telefone"
      type="text"
      errors={props.errors}
      toucheds={props.touched}
      textContentType="telephoneNumber"
      keyboardType="phone-pad"
    />
    <Button
      mode="contained"
      onPress={props.submitForm}
      disabled={props.loading}
      loading={props.loading}
    >
      Registrar
    </Button>
  </Form>
);
