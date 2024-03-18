import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

function SearchBox({ handleFetchLaunchesData }) {
  const [filterBy, onChangeFilter] = React.useState('');
  const [filterByValue, onChangeValue] = React.useState('');

  // const onChangeFilterbyHandler = (val) => {
  //   onChangeFilter(val);
  //   handleFetchLaunchesData(val, filterByValue)
  // }
  const onChangeFilterValHandler = (val) => { 
    onChangeValue(val);
    handleFetchLaunchesData('mission_name', val);

  }


  return (
    <SafeAreaView>
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeFilterbyHandler}
        value={filterBy}
        placeholder="Filter By"

      /> */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeFilterValHandler}
        value={filterByValue}
        placeholder="Search by Mission Name"
      />
    </SafeAreaView>
   
  
  );


};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 10,
    // width: 300,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBox;