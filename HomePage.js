import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Btn from './Btn';
import { darkBlue, blue } from './Constants'
import UserWelcome from './UserWelcome';
import { useDispatch, useSelector } from 'react-redux';


function HomePage(props) {
    return (
        <View style={styles.center}>
            <View>
        <Text style={styles.header1}>Welcome to</Text>
        <Text style={styles.header2}>SpaceX Launches</Text>
        <Btn bgColor={blue} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
        <Btn bgColor='white' textColor={darkBlue} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
    </View>
    </View>
        
    );
}

const styles = StyleSheet.create({


    center: {
        border: "2px",
        borderradius: "5px",
        padding: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    header1: {

        color: "#ADD8E6",
        fontSize: "64px",
        marginTop: "10%"
    },

    header2: {
        color: '#00d2ff',
        fontSize: "64px",
        marginBottom: "10%"
    }
});

export default HomePage;




