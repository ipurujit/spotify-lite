// src/components/atoms/Image/Image.tsx
import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps, StyleSheet } from 'react-native';

interface ImageProps extends RNImageProps {
  uri?: string;
}

const Image: React.FC<ImageProps> = ({ uri, style, ...props }) => {
  return (
    <RNImage
      source={{ uri }}
      style={[styles.image, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    // default styles can be added here
  },
});

export default Image;

