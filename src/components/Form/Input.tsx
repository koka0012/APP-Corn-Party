import { handleTextInput, makeInputGreatAgainProps, withNextInputAutoFocusInput } from 'react-native-formik';
import { TextInput, TextInputProps } from 'react-native-paper';
import { compose } from 'recompose';

export default compose<
  TextInputProps,
  TextInputProps & makeInputGreatAgainProps
>(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextInput);
