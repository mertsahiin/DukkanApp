
import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Products from './pages/Products/Products';
import Detail from './pages/Detail/Detail';
import 'react-native-gesture-handler';
import config from '../config';
import Login from './pages/Login/Login'

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'LoginPage' component = {Login} options={{
         headerShown : false,
        }}/>
        <Stack.Screen name = 'ProductsPage' component = {Products} options={{
          title: 'Dükkan',
          headerStyle: {backgroundColor: '#64b5f6'},
          headerTitleStyle: {color : 'white'},
        }}/>
        <Stack.Screen name = 'DetailPage' component = {Detail} options={{
          title: 'Detay',
          headerStyle: {backgroundColor: '#64b5f6'},
          headerTitleStyle: {color : 'white'},
          headerTintColor: 'white',
        }}/>
      
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

