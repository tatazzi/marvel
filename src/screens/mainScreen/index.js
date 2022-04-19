import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import Header from '../../componets/Header';
import Categories from '../../componets/Categories';
import TitleSection from '../../componets/TitleSection';
import Posters from '../../componets/Posters';
import SectionList from '../../componets/SectionList';

const MainScreen = ({navigation}) => {
  const herosChars = [
    {
      id: 1,
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BM2UwMTBmZGEtM2E3NC00YTlmLThhOWYtODMwZjQ2YWFmMDM4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg',
      realName: 'Peter Park',
      pseudonym: 'Homem Aranha',
    },
    {
      id: 2,
      imageUrl:
        'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2018/02/black-panther-destaque.jpg',
      realName: "T'Chala",
      pseudonym: 'Pantera Negra',
    },
    {
      id: 3,
      imageUrl:
        'https://super.abril.com.br/wp-content/uploads/2018/07/maxresdefault-22.jpg',
      realName: 'Tony Stark',
      pseudonym: 'Homem de Ferro',
    },
    {
      id: 4,
      imageUrl:
        'https://static.wikia.nocookie.net/universocinematograficomarvel/images/4/4c/Thor-Ultimato.jpg/revision/latest?cb=20190514112708&path-prefix=pt',
      realName: 'Thor Odinson',
      pseudonym: 'Thor',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.headText}>Bem vindo ao Marvel Heroes</Text>
          <Text style={styles.headTextBold}>Escolha o seu personagem</Text>
        </View>
        <Categories />
        <TitleSection type="Heróis" onPress={() => {}} />
        <SectionList>
          {herosChars.map((char, i) => {
            return (
              <Posters
                key={`hero-${char.id}`}
                realName={char.realName}
                pseudonym={char.pseudonym}
                source={{uri: char.imageUrl}}
                onPress={() => {
                  navigation.navigate('Info');
                }}
              />
            );
          })}
        </SectionList>
        <TitleSection type="Vilões" onPress={() => {}} />
        <SectionList>
          <Posters
            source={require('../../assets/posterImages/villain/RedSkull.png')}
            realName={'Jöhann Schmidt '}
            pseudonym={'Caveira Vermelha'}
          />
          <Posters
            source={require('../../assets/posterImages/villain/DrDoom.png')}
            realName={'Victor Von Doom'}
            pseudonym={'Doutor Destino'}
          />
          <Posters
            source={{
              uri: 'https://static.wikia.nocookie.net/marvel/images/b/bc/Thanos_%28Earth-199999%29_from_Avengers_Infinity_War_-_The_Official_Movie_Special_001.jpg/revision/latest?cb=20190503185709&path-prefix=pt-br',
            }}
            realName={'Thanos de Titã'}
            pseudonym={'Thanos'}
          />
          <Posters
            source={{
              uri: 'https://static.wikia.nocookie.net/marvelstudios/images/a/a2/Infobox-1_Ultron.jpg/revision/latest?cb=20171206213312&path-prefix=fr',
            }}
            realName={'Ultron-5'}
            pseudonym={'Ultron'}
          />
        </SectionList>
        <TitleSection type="Anti-heróis" onPress={() => {}} />
        <SectionList>
          <Posters
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuaSiNI4nMXRj_yis-v_eWLhKxtK7gqaTS0Q&usqp=CAU',
            }}
            realName={'Wade Wilson'}
            pseudonym={'Deadpool'}
          />
          <Posters
            source={{
              uri: 'https://t.ctcdn.com.br/lgqnCyPqj9ZnPD1UtXdDFNi8tps=/1244x700/smart/filters:format(webp)/i450867.jpeg',
            }}
            realName={'Eddie Brock'}
            pseudonym={'Venom'}
          />
          <Posters
            source={{
              uri: 'https://http2.mlstatic.com/D_NQ_NP_963760-MLB47711017333_092021-O.jpg',
            }}
            realName={'Johnny Blaze'}
            pseudonym={'Motoqueiro Fantasma'}
          />
          <Posters
            source={{
              uri: 'https://sm.ign.com/t/ign_br/screenshot/default/punisher_k3gv.1200.jpg',
            }}
            realName={'Francis "Frank" Castle Castiglione'}
            pseudonym={'Justiceiro'}
          />
        </SectionList>
        <TitleSection type="Alienígenas" onPress={() => {}} />
        <SectionList>
          <Posters
            source={{
              uri: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/10/venom-2.jpg',
            }}
            realName={'Simbionte'}
            pseudonym={'Carnificina'}
          />
          <Posters
            source={require('../../assets/posterImages/alien/ronan.png')}
            realName={'Kree'}
            pseudonym={'Ronan'}
          />
          <Posters
            source={{
              uri: 'https://static.wikia.nocookie.net/marvel/images/4/44/Drax_Profile%281%29.jpeg/revision/latest?cb=20170406220453&path-prefix=pt-br',
            }}
            realName={'Mutação Humana'}
            pseudonym={'Drax'}
          />
          <Posters
            source={{
              uri: 'https://static.wikia.nocookie.net/universocinematograficomarvel/images/1/16/Groot_textless.jpg/revision/latest?cb=20150921015319&path-prefix=pt',
            }}
            realName={'Flora Colossus'}
            pseudonym={'Groot'}
          />
        </SectionList>
        <TitleSection type="Humanos" onPress={() => {}} />
        <SectionList>
          <Posters
            source={require('../../assets/posterImages/human/starkDad.png')}
            realName={'Homem de Ferro'}
            pseudonym={'Howard Stark'}
          />
          <Posters
            source={require('../../assets/posterImages/human/MaryJane.png')}
            realName={'Homem Aranha'}
            pseudonym={'Mary Jane'}
          />
          <Posters
            source={{
              uri: 'https://assets.b9.com.br/wp-content/uploads/2020/09/1529317045-nick-fury-samuel-l-jackson-mcu.jpg',
            }}
            realName={'Vingadores'}
            pseudonym={'Nick Fury'}
          />
        </SectionList>
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
