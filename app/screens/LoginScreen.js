import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';
import firebase from "firebase"

import { firebaseConfig } from "../../config"
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}

class LoginScreen extends Component {

    onSignIn = (googleUser) => {
        // console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(function (firebaseUser) {
            unsubscribe();
            // Check if we are already signed-in Firebase with the correct user.
            if (!this.isUserEqual(googleUser, firebaseUser)) {
                // Build Firebase credential with the Google ID token.
                var credential = firebase.auth.GoogleAuthProvider.credential(
                    // googleUser.getAuthResponse().id_token
                    googleUser.idToken,
                    googleUser.accessToken
                );
                // Sign in with credential from the Google user.
                firebase.auth().signInWithCredential(credential)
                    .then((result) => {
                        console.log("user signed in")

                        if (result.additionalUserInfo.isNewUser) {
                            firebase.database().ref('/users/' + result.user.uid).set({
                                gmail: result.user.email,
                                profilePicture: result.additionalUserInfo.profile.picture,
                                locale: result.additionalUserInfo.profile.locale,
                                firstName: result.additionalUserInfo.profile.given_name,
                                lastName: result.additionalUserInfo.profile.family_name,
                                createdAt: Date.now()
                            }).then(function (snapshot) {
                                console.log("saved")
                            });
                        } else {
                            firebase.database().ref('/users/' + result.user.uid).update({
                                lastLoggedIn: Date.now()
                            })
                        }

                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // The email of the user's account used.
                        var email = error.email;
                        // The firebase.auth.AuthCredential type that was used.
                        var credential = error.credential;
                        // ...
                    });
            } else {
                console.log('User already signed-in Firebase.');
            }
        }.bind(this)
        );
    }

    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    }

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behaviour: 'web',
                androidClientId: '255608112195-kclhker18n9asnheag7qmub137souird.apps.googleusercontent.com',
                // iosClientId: '255608112195-kclhker18n9asnheag7qmub137souird.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });


            if (result.type === 'success') {
                this.onSignIn(result)
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Sign in With Google" onPress={() => this.signInWithGoogleAsync()} />
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

export default LoginScreen;