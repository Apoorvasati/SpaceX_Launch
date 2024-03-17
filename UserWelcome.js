import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import Signup from './Signup';
import Login from './Login';
import SignedInExperience from './SignedInExperience';



import { useDispatch, useSelector } from 'react-redux';


export default function UserWelcome(props) {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);
    return (
        <View>
            {currentUser ? (<View>
                <Text>Welcome {currentUser.username}!!</Text>
                <Button>Sign out</Button>
                <SignedInExperience/>
            </View>) 
            : 
            (<View>
                <Text>Move to </Text>
                <Button onPress={() => props.navigation.navigate("Login")}><Text>login screen</Text></Button>
            </View>)}
        </View>

    );

}
const styles = StyleSheet.create({

    center: {
        // display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    imageSize: {
        height: '100px',
        width: '100px',
    }
});