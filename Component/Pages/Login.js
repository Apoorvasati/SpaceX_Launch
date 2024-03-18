import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import Btn from '../Btn.js';
import { darkBlue } from '../Constants.js';
import Field from '../Field.js';
import { login } from '../../actions/authActions.js';


const Login = (props) => {

    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login({ username, password }));
       
        // You can add further logic here like navigation
        alert("Logged In");
        props.navigation.navigate("Home")
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.center}>
            <Text
                style={styles.headerTop}>
                Login
            </Text>

            <Text style={styles.headerfooter1}>
                Welcome Back
            </Text>
            <Text
                style={styles.headerfooter2}>
                Login to your account
            </Text>
            <Field style={styles.inputs}
                placeholder="Email"
                keyboardType={'email-address'}
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <Field style={styles.inputs}
                placeholder="Password" secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <Btn textColor='white' bgColor={darkBlue} btnLabel="Login" Press={handleLogin} />

            <Text style={styles.footer2}>Don't have an account ?{" "}
                <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                    <Text style={styles.footer1}>Signup</Text>
                </TouchableOpacity></Text>

        </View>

    );
};
const styles = StyleSheet.create({


    center: {

        display: 'flex',
        position: 'fixed',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '',
        height: 700,
        width: '100%'


    },

    headerTop: {
        color: 'grey',
        fontSize: 64,
        fontWeight: 'bold',
        marginVertical: 20,

    },

    headerfooter1: {
        fontSize: 40,
        color: '#00d2ff',
        fontWeight: 'bold',

    },

    headerfooter2: {
        color: 'grey',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 20,

    },


    inputs: {
        fontSize: 30,
        color: 'black',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px"

    },

    footer1: {
        color: '#00d2ff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'left'

    },
    footer2: {

        fontWeight: 'bold',
        fontSize: 16
    },



});
export default Login;
