import * as React from 'react';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface BottomBarIconProps extends IconProps {
  focused: boolean;
  horizontal: boolean;
  tintColor: string | null;
}

export default ({ name, tintColor, ...props }: BottomBarIconProps) => (
  <Icon size={24} name={name} color={tintColor || "#fff"} {...props} />
);
