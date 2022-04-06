import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CategoryButton = ({iconImages, linearColors, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient style={styles.categoryButton} colors={linearColors}>
        <Image source={iconImages} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const Categories = () => {
  return (
    <View style={styles.allCategories}>
      <CategoryButton
        onPress={() => {}}
        linearColors={['#005BEA', '#00C6FB']}
        iconImages={require('../assets/categoriesImages/hero.png')}
      />
      <CategoryButton
        onPress={() => {}}
        linearColors={['#ED1D24', '#ED1F69']}
        iconImages={require('../assets/categoriesImages/villain.png')}
      />
      <CategoryButton
        onPress={() => {}}
        linearColors={['#B224EF', '#7579FF']}
        iconImages={require('../assets/categoriesImages/antiHero.png')}
      />
      <CategoryButton
        onPress={() => {}}
        linearColors={['#0BA360', '#3CBA92']}
        iconImages={require('../assets/categoriesImages/alien.png')}
      />
      <CategoryButton
        onPress={() => {}}
        linearColors={['#FF7EB3', '#FF758C']}
        iconImages={require('../assets/categoriesImages/human.png')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  allCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 28,
  },
  categoryButton: {
    width: 58,
    height: 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Categories;
