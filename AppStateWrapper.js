import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import Signup from './Signup';
import Login from './Login';
// import SignedInExperience from './SignedInExperience';
import { useDispatch, useSelector } from 'react-redux';
import UserWelcome from './UserWelcome';


export default function AppStateWrapper() {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.currentUser);
    console.log(currentUser)
    const Stack = createNativeStackNavigator();
    return (
        <View style={styles.center}>
             {currentUser ? (<UserWelcome/>)
             :

            (<NavigationContainer style={styles.center}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={HomePage} />
                    <Stack.Screen name="Signup" component={Signup} />
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>)}
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