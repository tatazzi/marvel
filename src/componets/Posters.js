import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Posters = ({source, onPress, realName, pseudonym}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <ImageBackground
        borderRadius={23}
        source={source}
        style={styles.container}
      >
        <LinearGradient style={styles.gradient} colors={['#00000000', '#000']}>
          <Text style={styles.realName}>{realName}</Text>
          <Text style={styles.pseudonym}>{pseudonym}</Text>
        </LinearGradient>
      </ImageBackground>
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
  gradient: {
    paddingLeft: 10,
    borderBottomRightRadius: 23,
    borderBottomLeftRadius: 23,
    paddingBottom: 10,
  },
  realName: {
    color: '#fff',
    fontSize: 10,
  },
  pseudonym: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Gilroy-ExtraBold',
  },
});

export default Posters;
