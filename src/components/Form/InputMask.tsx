import * as React from 'react';
import { handleTextInput, makeInputGreatAgainProps, withNextInputAutoFocusInput } from 'react-native-formik';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';
import { TextInput, TextInputProps } from 'react-native-paper';
import { compose } from 'recompose';

import HelperText from './HelperText';

const Input: React.FunctionComponent<
  { customTextInputProps: TextInputProps } & TextInputMaskProps
> = props => (
  <TextInputMask
    type="cel-phone"
    {...props}
    customTextInput={TextInput}
    customTextInputProps={props.customTextInputProps}
  />
);

export default (
  props: { errors: object; toucheds: object } & {
    customTextInputProps: TextInputProps;
  } & TextInputMaskProps &
    makeInputGreatAgainProps
) => (
  <React.Fragment>
    <Input style={{ backgroundColor: "#fff" }} {...props} />
    <HelperText
      name={props.name}
      errors={props.errors}
      touched={props.toucheds}
    />
  </React.Fragment>
);

export const InputMaskNoError = compose<
  { customTextInputProps: TextInputProps } & TextInputMaskProps,
  { customTextInputProps: TextInputProps } & TextInputMaskProps &
    makeInputGreatAgainProps
>(
  handleTextInput,
  withNextInputAutoFocusInput
)(Input);
