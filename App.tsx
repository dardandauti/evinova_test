/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from './pages/Home/Home';
import { Book } from './pages/Book/Book';
import axios from 'axios';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  axios.defaults.baseURL = 'https://openlibrary.org';

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
