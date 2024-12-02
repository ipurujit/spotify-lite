// src/components/atoms/TouchableOpacity/TouchableOpacity.tsx
import React from 'react';
import { TouchableOpacity as RNTouchableOpacity, TouchableOpacityProps as RNTouchableOpacityProps, StyleSheet } from 'react-native';

const TouchableOpacity: React.FC<RNTouchableOpacityProps> = ({ children, style, ...props }) => {
  return (
    <RNTouchableOpacity style={[styles.button, style]} {...props}>
      {children}
    </RNTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // default styles can be added here
  },
});

export default TouchableOpacity;

