import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function AppButton({ title, backgroundColor = "#00ace5", color = "white", width = "100%", onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: backgroundColor, width: width }]} >
            <Text style={[styles.text, { color: color }]} >{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        marginVertical: 10
    },
    text: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
})

export default AppButton;