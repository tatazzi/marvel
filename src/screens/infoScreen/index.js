import React from 'react';
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

const InfoScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://m.media-amazon.com/images/M/MV5BM2UwMTBmZGEtM2E3NC00YTlmLThhOWYtODMwZjQ2YWFmMDM4XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_.jpg',
      }}
      style={styles.image}
    >
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
            <Text style={styles.name}>Peter Park</Text>
            <Text style={styles.pseudonym}>Homem Aranha</Text>
            <View style={styles.characteristics}>
              <Characteristics
                source={require('../../assets/images/ageIcon.png')}
                characteristicsText={'30 anos'}
              />
              <Characteristics
                source={require('../../assets/images/WeightIcon.png')}
                characteristicsText={'78kg'}
              />
              <Characteristics
                source={require('../../assets/images/heigthIcon.png')}
                characteristicsText={'1.80m'}
              />
              <Characteristics
                source={require('../../assets/images/planetIcon.png')}
                characteristicsText={'Terra 616'}
              />
            </View>
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
});
export default InfoScreen;
