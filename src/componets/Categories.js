import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Categorys = () => {
  return (
    <View style={styles.allCategorys}>
      <LinearGradient style={styles.hero} colors={['#005BEA', '#00C6FB']}>
        <Image source={require('../assets/categoriesImages/hero.png')} />
      </LinearGradient>
      <LinearGradient style={styles.villain} colors={['#ED1D24', '#ED1F69']}>
        <Image source={require('../assets/categoriesImages/villain.png')} />
      </LinearGradient>
      <LinearGradient style={styles.antiHero} colors={['#B224EF', '#7579FF']}>
        <Image source={require('../assets/categoriesImages/antiHero.png')} />
      </LinearGradient>
      <LinearGradient style={styles.alien} colors={['#0BA360', '#3CBA92']}>
        <Image source={require('../assets/categoriesImages/alien.png')} />
      </LinearGradient>
      <LinearGradient style={styles.human} colors={['#FF7EB3', '#FF758C']}>
        <Image source={require('../assets/categoriesImages/human.png')} />
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  allCategorys: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  hero: {
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  villain: {
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  antiHero: {
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alien: {
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  human: {
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Categorys;
