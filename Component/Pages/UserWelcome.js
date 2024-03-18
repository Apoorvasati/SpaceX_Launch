import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SpaceXLauchList from '../../SpaceXLauchList';



import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/authActions.js';

export default function UserWelcome(props) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);

    function handleSignout(){
        dispatch(logout());  
    }
    return (
        // <ScrollView contentContainerStyle={styles.scrollContainer}>
        <div style={{    width: "-webkit-fill-available", overflow: "auto"}}>
                <Text>Welcome {currentUser.username}!!</Text>
                <button onClick={handleSignout}>Sign out</button>
                <SpaceXLauchList/>
            </div> 
    );
}
const styles = StyleSheet.create({

    // scrollContainer: {
    //     flexGrow: 1,
    // },

    center: {
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        // overflowY: 'scroll'
    },

    imageSize: {
        height: '100px',
        width: '100px',
    }
});