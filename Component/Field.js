import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {darkBlue} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={styles.inputbox}

      placeholderTextColor={darkBlue}></TextInput>
  );
};

const styles = StyleSheet.create({

  inputbox:{
    borderRadius: 100, 
    color: '#00d2ff', 
    paddingHorizontal: 10,
    fontWeight:'bold', 
    width: '30%',
    height:"50px", 
    backgroundColor: 'rgb(220,220, 220)', 
    marginVertical: 10
    
  }
})
export default Field;   
