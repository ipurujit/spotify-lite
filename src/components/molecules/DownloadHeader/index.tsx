
 // src/components/molecules/DownloadHeader/index.tsx
import React from 'react';
import Text from '../../atoms/Text';
import { Switch, View, ViewStyle } from 'react-native';

interface DownloadHeaderProps {
  style?: ViewStyle;
}

const DownloadHeader: React.FC<DownloadHeaderProps> = ({ style }) => (
  <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
    <Text>Download</Text>
    <Switch value={false} onValueChange={() => {}} />
  </View>
);

export default DownloadHeader;
