import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import firebase from "firebase"

import LoadingScreen from "./screens/LoadingScreen"
import LoginScreen from "./screens/LoginScreen"
import DashboardScreen from "./screens/DashboardScreen"
import { firebaseConfig } from "./config"

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
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
