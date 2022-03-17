import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './navigationService';

import Home from '../screens/home';

import {StatusBar} from 'react-native';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'Home',
};

const App: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar />

      <Stack.Navigator>
        <Stack.Screen name="Home" options={homeOptions} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
