import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons"

function InputFeild({ icon, width = "100%", style, ...otherProps }) {
    return (
        <View style={[styles.inputContainer, { width: width }]}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color="#b5b8bf" />}
            <TextInput {...otherProps} style={style} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },
    icon: {
        marginRight: 10
    }
})

export default InputFeild;