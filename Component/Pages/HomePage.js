import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Btn from '../Btn.js';
import { darkBlue, grey } from '../Constants.js';



function HomePage(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.header1}>Welcome to</Text>
            <Text style={styles.header2}><b>SpaceX Launches</b></Text>
            <Btn bgColor={grey} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
            <Btn bgColor='white' textColor={darkBlue} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
        </View>

    );
}

const styles = StyleSheet.create({


    center: {
        marginTop:'5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        // backgroundColor: ''
    },

    header1: {

        color: "grey",
        fontSize: "64px",
        marginTop: "5%",
        display: 'flex'
    },

    header2: {
        color: '#00d2ff',
        fontSize: "70px",
        marginBottom: "10%",
        fontWeight: "bold",
        display: 'flex'
    }
});

export default HomePage;




