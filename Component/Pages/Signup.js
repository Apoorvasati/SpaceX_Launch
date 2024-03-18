import React from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Touchable, TouchableOpacity, TextInput, Button } from 'react-native';
// import Background from './Background';
import Btn from '../Btn.js';
import { darkBlue } from '../Constants.js';
import Field from '../Field.js';
import { useDispatch } from 'react-redux';
import { signUp } from '../../actions/authActions.js';

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
    <View style={styles.center}>
      <Text style={styles.headerTop}>
        Register
      </Text>
      <Text
        style={styles.headerfooter1}>
        Create a new account
      </Text>
      <Field style={{ width: '100%' }}
        placeholder="Email / Username"
        keyboardType={'email-address'}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Field style={{ width: '100%' }} placeholder="Password" secureTextEntry={true} value={password}
        onChangeText={text => setPassword(text)} />
      <View>
        <Text style={{ color: 'grey', fontSize: 12, }}>
          By signing in, you agree to our {" "}
          <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 12, }}>
            Terms & Conditions and Privacy Policy
          </Text>
        </Text>

      </View>
      <Btn textColor='white' bgColor={darkBlue} btnLabel="Sign Up" Press={handleSignUp} />
      {/* <View
            style={styles.footerPosition}> */}
      <Text style={styles.footer1}>
        Already have an account ?{" "}
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}>
          <Text
            style={styles.footer2}>
            Login
          </Text>
        </TouchableOpacity>
      </Text>

      {/* </View> */}

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
    color: '#00d2ff',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,


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

  bottomtexts: {
    // display: 'flex',
    flexDirection: 'row',
    width: '78%',
    // paddingRight: 16
  },

  bottomtext1: {
    color: 'grey',
    fontSize: 12
  },
  bottomtext2: {
    color: '#00d2ff',
    fontWeight: 'bold',
    fontSize: 12
  },

  footerPosition: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  footer1: {
    fontSize: 16, fontWeight: 'bold'

  },
  footer2: {
    fontSize: 16, fontWeight: 'bold', color: '#00d2ff'

  }


})
export default Signup;
