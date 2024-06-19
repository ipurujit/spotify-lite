// src/components/molecules/Cover/index.tsx
import React from 'react';
import Image from '../../atoms/Image';
import { ImageStyle } from 'react-native';

interface CoverProps {
  uri: string;
  style?: ImageStyle;
}

const Cover: React.FC<CoverProps> = ({ uri, style }) => (
  <Image uri={uri} style={style} />
);

export default Cover;
