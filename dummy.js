import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyD_l6abNuP52Awt_d6xI9wlQEn9Z0Og1J0",
    authDomain: "groupchatapplicationdev.firebaseapp.com",
    databaseURL: "https://groupchatapplicationdev.firebaseio.com",
    projectId: "groupchatapplicationdev",
    storageBucket: "groupchatapplicationdev.appspot.com",
    messagingSenderId: "255608112195",
    appId: "1:255608112195:web:7df151c78e402727e040f6",
    measurementId: "G-1FVYVQ6WVW"
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        // auth.signInWithEmailAndPassword("engrzahid612@gmail.com", "12345");
        auth.createUserWithEmailAndPassword("engrzahid612@gmail.com", "123456")
    }

    return (
        <>
            <Button title="Sign in with Google<" className="sign-in" onPress={signInWithGoogle} />
            <Text>Do not violate the community guidelines or you will be banned for life!</Text>
        </>
    )
}

function SignOut() {
    return auth.currentUser && (
        <Button title="Sign Out" className="sign-out" onPress={() => auth.signOut()} />
    )
}



export default function App() {
    const user = auth.currentUser;

    console.log("current User", user)
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <SignOut />
            <View>
                {user ? <ChatRoom /> : <SignIn />}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
