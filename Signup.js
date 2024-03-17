import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity,TextInput, Button } from 'react-native';
// import Background from './Background';
import Btn from './Btn';
import { darkBlue } from './Constants';
import Field from './Field.js';
import { useDispatch } from 'react-redux';
import { signUp } from './actions/authActions';

const Signup = props => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(signUp({ username, password }));
    // You can add further logic here like navigation
    props.navigation.navigate("Login");

  }
  return (
    // <Background>
    <View style={styles.center}>
      <Text
        style={styles.header1}>
        Register
      </Text>
      <Text
        style={styles.header2}>
        Create a new account
      </Text>
      <View
        style={{

        }}>
        <Field placeholder="First Name" />
        <Field placeholder="Last Name" />
        <Field
          placeholder="Email / Username"
          keyboardType={'email-address'}
          value={username}
          onChangeText={text => setUsername(text)}
        />

        <Field placeholder="Contact Number" keyboardType={'number'} />
        <Field placeholder="Password" secureTextEntry={true}  value={password}
        onChangeText={text => setPassword(text)} />
        {/* <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
        <View
          style={styles.bottomtexts}>
          <Text style={styles.footer1}>
            By signing in, you agree to our{' '}
          </Text>
          <Text style={styles.footer2}>
            Terms & Conditions
          </Text>
        </View>

        <View
          style={styles.bottomtexts}>
          <Text style={styles.footer2}>
            and {" "}
          </Text>
          <Text style={styles.footer2}>
            Privacy Policy
          </Text>
        </View>
        <Button title="Sign Up" onPress={handleSignUp} />
        <View
          style={styles.center}>
          <Text style={styles.bottomtext1}>
            Already have an account ?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={styles.bottomtext2}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // {/* </Background> */}
  );
};


const styles = StyleSheet.create({

  center: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },

  header1: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 64,
    fontWeight: 'bold',
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  header2: {
    backgroundColor: 'white',
    color: '#00d2ff',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,

  },

  input: {
    backgroundColor: 'white',
    height: 700,
    width: 460,
    borderTopLeftRadius: 130,
    paddingTop: 50,
    alignItems: 'center'

  },

  bottomtexts:{
    // display: 'flex',
    flexDirection: 'row',
    width: '78%',
    paddingRight: 16
  },

  bottomtext1:{
     color: 'grey',
     fontSize: 16 
  },
  bottomtext2:{
    color: '#00d2ff', 
    fontWeight: 'bold', 
    fontSize: 16
  },

footer1:{
  fontSize: 16, fontWeight: 'bold'

},
footer2:{
  fontSize: 16, fontWeight: 'bold', color:'#00d2ff'

}


})
export default Signup;
