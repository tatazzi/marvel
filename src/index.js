import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from './componets/Header';
import Categorys from './componets/Categories';

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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  page: {
    flex: 1,
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
});
export default App;
