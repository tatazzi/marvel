import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../../componets/Header';
import Categories from '../../componets/Categories';
import TitleSection from '../../componets/TitleSection';
import Posters from '../../componets/Posters';
import SectionList from '../../componets/SectionList';
import api from '../../services/Api';

const MainScreen = ({navigation}) => {
  const [allChars, setAllChars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = async () => {
    setLoading(true);
    const {data} = await api.get('/characters?limit=15');
    setLoading(false);
    setAllChars(data.results);
  };

  const renderPoster = type =>
    allChars
      .filter(el => el.type === type)
      .map((char, i) => (
        <Posters
          key={`${type}-${char.id}`}
          realName={char.realName}
          pseudonym={char.pseudonym}
          source={{uri: char.imageUrl}}
          onPress={() => {
            navigation.navigate('Info', {char});
          }}
        />
      ));

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.headText}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.headTextBold}>Escolha o seu personagem</Text>
        </View>
        <Categories />
        {loading ? (
          <ActivityIndicator size="small" color="#FF0000" />
        ) : (
          <>
            <TitleSection type="Heróis" onPress={() => {}} />
            <SectionList>{renderPoster('hero')}</SectionList>
            <TitleSection type="Vilões" onPress={() => {}} />
            <SectionList>{renderPoster('villain')}</SectionList>
            <TitleSection type="Anti-heróis" onPress={() => {}} />
            <SectionList>{renderPoster('anti-hero')}</SectionList>
            <TitleSection type="Alienígenas" onPress={() => {}} />
            <SectionList>{renderPoster('alien')}</SectionList>
            <TitleSection type="Humanos" onPress={() => {}} />
            <SectionList>{renderPoster('human')}</SectionList>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  scrollContent: {
    paddingLeft: 28,
    paddingTop: 16,
    paddingBottom: 42,
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

export default MainScreen;
