import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {MainNavigation} from './src/navigations/MainNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
