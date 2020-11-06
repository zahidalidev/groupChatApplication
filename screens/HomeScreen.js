import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

import GroupCard from '../components/GroupCard';
import HeaderBar from '../components/HeaderBar';

const auth = firebase.auth();
const firestore = firebase.firestore();

class HomeScreen extends Component {

    state = {
        groups: []
    }

    groupRef = firestore.collection('groups')

    componentDidMount = async () => {
        try {
            await this.groupRef.onSnapshot((querySnapshot) => {
                const groups = querySnapshot.docChanges().map(({ doc }) => {
                    const group = doc.data();
                    return group;
                })
                console.log(groups)
            })
        } catch (error) {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#364351" />
                <HeaderBar navigate={this.props.navigation.navigate} />

                {/* <GroupCard avatarTitle="MD" avatarBackColor="orange" groupTitle="AI Lab Project" /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#2d3c4c",
        alignItems: "flex-end",
        justifyContent: "flex-start"
    },
})

export default HomeScreen;