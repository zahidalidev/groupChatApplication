import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import firebase from "firebase"

class DashboardScreen extends Component {

    signOut = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Dashboard Screen</Text>
                <Button title="Logout" onPress={this.signOut} />
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

export default DashboardScreen;