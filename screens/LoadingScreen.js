import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from "firebase";


import { firebaseConfig } from "../config"
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
class LoadingScreen extends Component {

    componentDidMount = () => {
        this.checkIfLogin()
    }

    checkIfLogin = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            console.log("loadingScreen", user)
            if (user) {
                this.props.navigation.navigate('HomeScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }
        }.bind(this))
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator color="red" size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default LoadingScreen;