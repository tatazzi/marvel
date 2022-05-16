import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Characteristics from '../../componets/CharacteristicsIcon';
import ProgressBar from '../../componets/ProgressBar';
import Movies from '../../componets/movies';

const InfoScreen = ({navigation, route}) => {
  const {char} = route.params;
  return (
    <ImageBackground source={{uri: char.imageUrl}} style={styles.image}>
      <LinearGradient
        style={{flex: 1}}
        colors={['transparent', '#00000050', '#000', '#000']}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.arrowLeft}
          >
            <AntDesign name="arrowleft" size={30} color="#fff" />
          </TouchableOpacity>
          <ScrollView
            contentContainerStyle={styles.contentScroll}
            style={styles.scroll}
          >
            <Text style={styles.name}>{char.realName}</Text>
            <Text style={styles.pseudonym}>{char.pseudonym}</Text>
            <View style={styles.characteristics}>
              <Characteristics
                source={require('../../assets/images/ageIcon.png')}
                characteristicsText={`${char.characteristics.age} Anos`}
              />
              <Characteristics
                source={require('../../assets/images/WeightIcon.png')}
                characteristicsText={`${char.characteristics.weight} kg`}
              />
              <Characteristics
                source={require('../../assets/images/heigthIcon.png')}
                characteristicsText={`${char.characteristics.height} m`}
              />
              <Characteristics
                source={require('../../assets/images/planetIcon.png')}
                characteristicsText={`${char.characteristics.earthNumber}`}
              />
            </View>
            <Text style={styles.description}>{char.description}</Text>
            <Text style={styles.TitleSection}>Habilidade</Text>
            <ProgressBar percent={char.habilities.agility} ability={'Força'} />
            <ProgressBar
              percent={char.habilities.intelligence}
              ability={'Inteligência'}
            />
            <ProgressBar
              percent={char.habilities.resistance}
              ability={'Agilidade'}
            />
            <ProgressBar
              percent={char.habilities.speed}
              ability={'Resistencia'}
            />
            <ProgressBar
              percent={char.habilities.strength}
              ability={'Velocidade'}
            />
            <Text style={styles.TitleSection}>Filmes</Text>
            <ScrollView
              horizontal
              style={styles.moviesScroll}
              showsHorizontalScrollIndicator={false}
            >
              <Movies
                source={{
                  uri: 'https://static.wikia.nocookie.net/moviedatabase/images/2/23/Captain_America_-_Civil_War.jpg/revision/latest?cb=20161018152044}',
                }}
              />
              <Movies
                source={{
                  uri: 'https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg',
                }}
              />
              <Movies
                source={{
                  uri: 'https://lumiere-a.akamaihd.net/v1/images/690x0w_br_9e5801a5.jpeg?region=0%2C0%2C690%2C1035',
                }}
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowLeft: {
    margin: 26,
  },
  image: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    marginHorizontal: 26,
  },
  contentScroll: {
    paddingTop: 240,
  },
  name: {
    color: '#fff',
    fontFamily: 'Gilroy-Light',
    fontSize: 16,
  },
  pseudonym: {
    fontFamily: 'Gilroy-ExtraBold',
    color: '#fff',
    fontSize: 40,
  },
  characteristics: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 50,
  },
  description: {
    color: '#fff',
    fontFamily: 'Gilroy-Light',
    fontSize: 14,
    marginTop: 24,
  },
  TitleSection: {
    fontFamily: 'Gilroy-ExtraBold',
    color: '#fff',
    fontSize: 18,
    marginTop: 32,
  },
  moviesScroll: {
    marginTop: 24,
  },
});
export default InfoScreen;
