// import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Btn from '../Btn.js';
import { darkBlue, grey } from '../Constants.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, updateRegistrationsOnRefresh } from '../../actions/authActions.js';
import UserWelcome from './UserWelcome.js';



function HomePage(props) {
    const dispatch = useDispatch();
    var currentUser = null;
    useEffect(() => {
        // Check if users session already exists when the page is refreshed (Using session storage) and update redux global store
        let userRegistrationStore = sessionStorage.getItem('users_data');
        if (userRegistrationStore) {
            userRegistrationStore = JSON.parse(sessionStorage.getItem('users_data'));
            dispatch(updateRegistrationsOnRefresh(userRegistrationStore));
            let alreadyLoggedinUser = userRegistrationStore ? userRegistrationStore.currentUser : null;
            if (alreadyLoggedinUser) {
                dispatch(login(alreadyLoggedinUser));
                currentUser = alreadyLoggedinUser;
            }
        }
    }, []);


    if (!currentUser) {
        // Check if users session exists using redux global state
        currentUser = useSelector(state => state.auth.currentUser);
    }
    console.log(currentUser)



    return (
        <>
            {
                currentUser ? (<UserWelcome />) : (
                    <View style={styles.center} >
                        <Text style={styles.header1}>Welcome to</Text>
                        <Text style={styles.header2}><b>SpaceX Launches</b></Text>
                        <Btn bgColor={grey} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
                        <Btn bgColor='white' textColor={darkBlue} btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
                    </View >
                )
            }</ >


    );
}

const styles = StyleSheet.create({


    center: {
        marginTop: '5%',
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




