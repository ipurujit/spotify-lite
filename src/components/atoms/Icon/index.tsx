 // src/components/atoms/Icon.tsx
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleProp, TextStyle } from 'react-native';

interface IconProps {
  name: string;
  size: number;
  color: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, size, color, style, onPress }) => (
  <MaterialIcon
    name={name}
    size={size}
    color={color}
    style={style}
    onPress={onPress}
  />
);

export default Icon;
