import * as React from 'react';
import { makeInputGreatAgainProps } from 'react-native-formik';
import { TextInputProps } from 'react-native-paper';

import HelperText from './HelperText';
import Input from './Input';

/**
 * Este component junta o TextInput com o text error.
 */
export default (
  props: { errors: object; toucheds: object } & TextInputProps &
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
