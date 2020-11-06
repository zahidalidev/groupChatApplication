import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

import GroupCard from '../components/GroupCard';
import HeaderBar from '../components/HeaderBar';

class HomeScreen extends Component {



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