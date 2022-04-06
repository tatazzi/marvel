import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from './componets/Header';
import Categorys from './componets/Categories';
import Title from './componets/Title';

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
        <Title style={styles.categoriesTitle} type="Heróis" />
        <Title style={styles.categoriesTitle} type="Vilões" />
        <Title style={styles.categoriesTitle} type="Anti-heróis" />
        <Title style={styles.categoriesTitle} type="Alienígenas" />
        <Title style={styles.categoriesTitle} type="Humanos" />
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
  categoriesTitle: {
    paddingLeft: 28,
  },
});
export default App;
