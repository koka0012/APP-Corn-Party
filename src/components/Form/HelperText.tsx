import * as React from 'react';
import { HelperText } from 'react-native-paper';

/**
 * Faz o display do erro do input.
 */
export default (props: {
  errors: { [key: string]: any };
  name: string;
  touched: { [key: string]: any };
}) => (
  <HelperText
    type="error"
    visible={props.errors[props.name] && props.touched[props.name]}
  >
    {props.touched[props.name] && props.errors[props.name]}
  </HelperText>
);
