 // src/components/atoms/Image.tsx
import React from 'react';
import { ImageStyle } from 'react-native';
import FastImage from 'react-native-fast-image';

interface ImageProps {
  uri: string;
  style?: ImageStyle;
}

const Image: React.FC<ImageProps> = ({ uri, style }) => (
  <FastImage
    source={{ uri }}
    style={style}
  />
);

export default Image;
