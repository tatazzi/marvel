import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Title = props => {
  return <Text style={styles.title}>{props.type}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#F2264B',
    fontWeight: '500',
    fontFamily: 'Gilroy-Light',
  },
});
export default Title;
