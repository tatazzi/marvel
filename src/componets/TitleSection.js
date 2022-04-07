import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const TitleSection = ({type, onPress}) => {
  return (
    <View style={styles.seeAll}>
      <Text style={styles.title}>{type}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.buttonSeeAll}>Ver tudo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#F2264B',
    fontWeight: '500',
    fontFamily: 'Gilroy-ExtraBold',
  },
  seeAll: {
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonSeeAll: {
    fontSize: 14,
    color: '#B7B7C8',
    fontWeight: '400',
    fontFamily: 'Gilroy-Light',
  },
});
export default TitleSection;
