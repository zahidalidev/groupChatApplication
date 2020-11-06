import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from "firebase";

class LoadingScreen extends Component {

    componentDidMount = () => {
        this.checkIfLogin()
    }

    checkIfLogin = () => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log("user", user)
            if (user) {
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
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