import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Accessory } from 'react-native-elements';


function GroupCard({ avatarTitle, avatarBackColor, groupTitle, key }) {
    console.log("je", key)
    return (
        <TouchableOpacity key={key} style={styles.carContainer}>
            <Avatar rounded title={avatarTitle} overlayContainerStyle={{ backgroundColor: avatarBackColor }} size="medium" />
            <Text style={styles.groupTitle} >{groupTitle}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    carContainer: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomColor: "rgba(229, 222, 222, 0.4)",
        width: "95%",
        height: "7%",
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 15,
    },
    groupTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "400",
        marginLeft: 20
    }
})

export default GroupCard;