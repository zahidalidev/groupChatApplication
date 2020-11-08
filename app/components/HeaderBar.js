import React from 'react';
import { StyleSheet, View, Text, NativeModules } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import firebase from "firebase"

function HeaderBar({ navigate }) {
    const signOut = () => {
        firebase.auth().signOut().then(function () {
            // Sign-out successful.
        }).catch(function (error) {
            // An error happened.
        });
        NativeModules.DevSettings.reload();
    }

    return (
        <View style={{ flex: 1, flexDirection: "row", backgroundColor: "#364351", width: "100%", maxHeight: "7%", justifyContent: "space-between" }}>
            <Text style={{ color: "white", fontSize: 20, alignSelf: "center", marginLeft: 10 }} onPress={signOut} >Logout</Text>
            <MaterialCommunityIcons
                name="plus"
                size={35}
                color="white"
                style={{ margin: 10, alignSelf: "center", justifyContent: "flex-end" }}
                onPress={() => navigate('AddGroup')}
            />
        </View>
    );
}


export default HeaderBar;