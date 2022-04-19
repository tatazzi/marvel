import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from './screens/mainScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InfoScreen from './screens/infoScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={MainScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Info"
          component={InfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
