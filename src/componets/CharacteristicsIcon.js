import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Characteristics = ({characteristicsText, source}) => {
  return (
    <View style={styles.characteristicsIcon}>
      <Image style={styles.images} source={source} />
      <Text style={styles.characteristicsText}>{characteristicsText}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  characteristicsIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  images: {
    marginBottom: 12,
  },
  characteristicsText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 12,
    color: '#fff',
  },
});
export default Characteristics;
