// src/components/molecules/DotsView/index.tsx
import React from 'react';
import Icon from '../../atoms/Icon';
import { View, ViewStyle } from 'react-native';

interface DotsViewProps {
  color?: string;
  style?: ViewStyle;
}

const DotsView: React.FC<DotsViewProps> = ({ color = '#fff', style }) => (
  <View style={[{ flexDirection: 'column' }, style]}>
    <Icon name="circle-small" size={2.5} color={color} />
    <Icon name="circle-small" size={2.5} color={color} />
    <Icon name="circle-small" size={2.5} color={color} />
  </View>
);

export default DotsView;
