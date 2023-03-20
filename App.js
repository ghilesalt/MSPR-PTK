/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login.js';
import SignUp from './SignUp.js';
import Qr from './QR.js';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
            {
              headerStyle: {
                backgroundColor: "#92c74b",
              },
              headerTitleStyle: {
                fontSize: 25,
                color: "#FFFFFF",
              },
              headerTitleAlign: 'center',
              headerTintColor: "#FFFFFF"
            }}>
        <Stack.Screen name='Connexion' component={Login}/>
        <Stack.Screen name='Inscription' component={SignUp}/>
        <Stack.Screen name='Scanner' component={Qr}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
