// src/components/molecules/CoverBlank/index.tsx
import React from 'react';
import Image from '../../atoms/Image';
import { ImageStyle } from 'react-native';
import { coverImages } from '../../../common/theme/coverImages'; // Assuming coverImages is defined in the theme

interface CoverBlankProps {
  styles: ImageStyle[];
}

const CoverBlank: React.FC<CoverBlankProps> = ({ styles }) => (
  <Image uri={coverImages.noPlaylist} style={styles} />
);

export default CoverBlank;
