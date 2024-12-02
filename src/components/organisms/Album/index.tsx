import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../../atoms/Text';
import Cover from '../../molecules/Cover';
import CoverBlank from '../../molecules/CoverBlank';
import { SavedAlbumType } from '../../../redux/slices';

interface AlbumProps {
  album: SavedAlbumType;
  onPlaylistPressed: (id: string) => void;
}

const Album: React.FC<AlbumProps> = ({ album, onPlaylistPressed }) => {
  return (
    <TouchableOpacity
      onPress={() => onPlaylistPressed(album.id)}
      style={styles.container}>
      {album.url ? (
        <Cover uri={album.url} />
      ) : (
        <CoverBlank styles={[styles.cover]} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {album.name}
        </Text>
        <Text style={styles.owner}>by {album.owner}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    maxWidth: '77%',
  },
  title: {
    color: '#fff',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  owner: {
    color: '#ccc',
    textAlignVertical: 'center',
  },
  cover: {
    height: 50,
    width: 50,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
});

export default Album;
