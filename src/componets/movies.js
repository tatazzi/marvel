import React from 'react';
import {StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

const Movies = ({source, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <ImageBackground
        borderRadius={23}
        source={source}
        style={styles.container}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 230,

    justifyContent: 'flex-end',
  },
  touchable: {
    marginRight: 16,
  },
});
export default Movies;
