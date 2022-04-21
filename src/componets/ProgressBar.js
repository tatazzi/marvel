import React from 'react';
import DashedProgressBar from './DashedProgressBar';
import {View, Text, StyleSheet} from 'react-native';

const ProgressBar = ({percent, ability}) => {
  return (
    <View style={styles.abilitys}>
      <Text style={styles.abilityText}>{ability}</Text>
      <DashedProgressBar
        percent={percent}
        width={'70%'}
        height={12}
        duration={300}
        segmentWidth={2}
        gapWidth={4}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  abilityText: {
    color: '#fff',
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
  },
  abilitys: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 24,
  },
});
export default ProgressBar;
