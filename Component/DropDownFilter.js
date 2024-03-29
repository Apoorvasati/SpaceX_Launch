import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list'


function DropDownFilter({ data, label, filterByCol, handleFetchLaunchesData }) {

    const [filterByValue, onChangeFilter] = useState([]);

    function onChangeHandler(val){
        onChangeFilter(val);
        handleFetchLaunchesData(filterByCol, val);
        console.log(val);
    }
    const dataList = data.map(element => {
        return {
            'label': element,
            'value':  element
        }
    });
    return (
        <View>
            
            <Text>{label}</Text>
            <SelectList style={styles.dropdownBox}
        setSelected={(val) => onChangeHandler(val)} 
        data={dataList}
        save="value"
    />
        </View>
    )

}

const styles = StyleSheet.create({

    dropdownBox:{
        width:'10px'
    },
    dropdownText:{
        color:'grey'


    }
})
export default DropDownFilter;