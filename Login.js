import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
// import Background from './Background';
import Btn from './Btn';
import { darkBlue } from './Constants';
import Field from './Field.js';
import { useDispatch } from 'react-redux';
import { login } from './actions/authActions';


const Login = (props) => {

    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(login({ username, password }));
        // You can add further logic here like navigation
        alert("Logged In");
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.center}>
            <Text
                style={styles.header1}>
                Login
            </Text>
            <View>

                <Text style={styles.header2}>
                    Welcome Back
                </Text>
                <Text
                    style={styles.header3}>
                    Login to your account
                </Text>
                <Field style ={styles.inputs}
                    placeholder="Email / Username"
                    keyboardType={'email-address'}
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
                <Field style ={styles.inputs}
                placeholder="Password" secureTextEntry={true} 
                value={password}
                onChangeText={text => setPassword(text)}
                />
                <View
                    style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200 }}>
                    <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 16 }}>
                        Forgot Password ?
                    </Text>
                </View>
                <Btn textColor='white' bgColor={darkBlue} btnLabel="Login" Press={handleLogin} />
                <View style={styles.btn}>
                    <Text style={styles.smallText1}>Don't have an account ? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
                        <Text style={styles.smallText2}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({


    center: {
        backgroundColor: 'white',
        // display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },


    header1: {
        color: 'black',
        fontSize: 64,
        fontWeight: 'bold',
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },

    header2: {
        fontSize: 40,
        color: '#00d2ff',
        fontWeight: 'bold',
        // display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },


    header3: {
        fontSize: 40,
        color: '#00d2ff',
        fontWeight: 'bold',
        // display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    inputs: {
        fontSize: 30,
        color: 'black',
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px"
    },

    smallText1: {

        fontWeight: 'bold',
        fontSize: 16
    },
    smallText2: {

        color: '#00d2ff',
        fontWeight: 'bold',
        fontSize: 16
    },

    btn: {
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    }

});
export default Login;
