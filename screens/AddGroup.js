import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'

import AppButton from '../components/AppButton';
import InputFeild from '../components/InputFeild';

import { firebaseConfig } from "../config"
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function AddGroup(props) {
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');
    const [description, setDescription] = useState('');

    const groupRef = firestore.collection('groups')

    const createGroup = async () => {
        try {
            const { uid } = auth.currentUser;

            await groupRef.add({
                name,
                tag,
                description,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            })

            console.log("created")

        } catch (error) {
            console.log("Group Error: ", error)
        }
    }

    return (
        <View style={styles.container}>
            <InputFeild width="90%" placeholder="Group Name" onChangeText={(text) => setName(text)} style={{ alignSelf: "center", justifyContent: "center" }} />
            <InputFeild width="90%" placeholder="Group Tag" onChangeText={(text) => setTag(text)} style={{ alignSelf: "center", justifyContent: "center" }} />
            <InputFeild width="90%" placeholder="Group Description" onChangeText={(text) => setDescription(text)} style={{ alignSelf: "center", justifyContent: "center" }} />
            <AppButton title="Create Group" width="50%" onPress={createGroup} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d3c4c',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 100
    },

})

export default AddGroup;