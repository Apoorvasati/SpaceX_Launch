import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Component/Pages/HomePage';
import Signup from './Component/Pages/Signup';
import Login from './Component/Pages/Login';
import SpaceXLauchList from './SpaceXLauchList';
import { useDispatch, useSelector } from 'react-redux';
import UserWelcome from './Component/Pages/UserWelcome';
// import Background from './Component/Background';  
import { login } from './actions/authActions.js';
import { updateRegistrationsOnRefresh } from './actions/authActions.js';
export default function AppStateWrapper() {
 

    
    const Stack = createNativeStackNavigator();
    return (

        < >

            {/* {currentUser ? (<UserWelcome />)
                    :
                    (
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="Home" component={HomePage} />
                            <Stack.Screen name="Signup" component={Signup} />
                            <Stack.Screen name="Login" component={Login} />
                        </Stack.Navigator>
                    </NavigationContainer>
                    )} */}



            
                
                
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                        {/* {currentUser ? ( <Stack.Screen name="UserWelcome" component={UserWelcome} />) :(<></>)} */}
                            <Stack.Screen name="Home" component={HomePage} />
                            <Stack.Screen name="Signup" component={Signup} />
                            <Stack.Screen name="Login" component={Login} />
                           
                        </Stack.Navigator>
                    </NavigationContainer>
                
        </>

    );

}
