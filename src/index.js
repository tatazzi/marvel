import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from './componets/Header';
import Categorys from './componets/Categories';
import TitleSection from './componets/TitleSection';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Header></Header>
        <View style={styles.text}>
          <Text style={styles.headText}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.headTextBold}>Escolha o seu personagem</Text>
        </View>
        <Categorys></Categorys>
        <TitleSection type="Heróis" onPress={() => {}} />

        <TitleSection type="Vilões" onPress={() => {}} />
        <TitleSection type="Anti-heróis" onPress={() => {}} />
        <TitleSection type="Alienígenas" onPress={() => {}} />
        <TitleSection type="Humanos" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  text: {
    padding: 28,
  },
  headText: {
    fontSize: 14,
    color: '#B7B7C8',
    fontWeight: '400',
    fontFamily: 'Gilroy-Light',
  },
  headTextBold: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 32,
  },
  seeAll: {
    paddingHorizontal: 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default App;
