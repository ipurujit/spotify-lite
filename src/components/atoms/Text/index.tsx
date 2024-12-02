 // src/components/atoms/Text.tsx
import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { colors } from '../../../common/theme';

interface CustomTextProps extends TextProps {
  color?: string;
  fontSize?: number;
  fontWeight?: 'bold' | 'normal';
  letterSpacing?: number;
  textAlign?: 'center' | 'left' | 'right';
}

const Text: React.FC<CustomTextProps> = ({
  children,
  style,
  color = colors.white,
  fontSize = 16,
  fontWeight = 'normal',
  letterSpacing = 0.6,
  textAlign = 'left',
  ...props
}) => (
  <RNText
    style={[
      styles.text,
      { color, fontSize, fontWeight, letterSpacing, textAlign },
      style,
    ]}
    {...props}>
    {children}
  </RNText>
);

const styles = StyleSheet.create({
  text: {
    color: colors.white,
  },
});

export default Text;
