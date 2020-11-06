import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';
import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

import GroupCard from '../components/GroupCard';
import HeaderBar from '../components/HeaderBar';

import { firebaseConfig } from "../../config"
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

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
                    console.log("id", doc.id)
                    return group;
                })
                console.log("group: ", groups)
                this.setState({ groups })
            })
        } catch (error) {

        }
    }

    render() {
        const { groups } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#364351" />
                <HeaderBar navigate={this.props.navigation.navigate} />

                {groups.map((group, i) => (
                    <GroupCard key={i} avatarTitle="MD" avatarBackColor="orange" groupTitle={group.name} />
                ))}
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