import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.menu}>
        <Feather name="menu" size={30} color="#313140" />
      </View>
      <View style={styles.logo}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/marvel-logo.png')}
        />
      </View>
      <View style={styles.search}>
        <Fontisto name="search" size={30} color="#313140" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 28,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 71,
    height: 26,
  },
  search: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});

export default Header;
