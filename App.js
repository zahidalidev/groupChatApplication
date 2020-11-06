import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, LogBox } from 'react-native';
// import { createSwitchNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import LoadingScreen from "./screens/LoadingScreen"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import { firebaseConfig } from "./config"
import AddGroup from './screens/AddGroup';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

LogBox.ignoreLogs(['Setting a timer for a long period of time'])

const Stack = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName="LoadingScreen">
          <Stack.Screen name="LoadingScreen" >{(props) => <LoadingScreen {...props} />}</Stack.Screen>
          <Stack.Screen name="LoginScreen" >{(props) => <LoginScreen {...props} />}</Stack.Screen>
          <Stack.Screen name="HomeScreen">{(props) => <HomeScreen {...props} />}</Stack.Screen>
          <Stack.Screen name="AddGroup">{(props) => <AddGroup {...props} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
