import SearchBox from './SearchBox.js';
import DropDownFilter from './DropDownFilter.js';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ErrorState from './ErrorState.js';
export default function SignedInExperience() {
    const [launchesList, setLaunchesData] = useState([]);
    const [filterValuesList, setFilterValueList] = useState([]);
    const [launchesDataBackup, setlaunchesDataBackup] = useState([]);
    const [showErrorState, setShowErrorState] = useState(false);
    const [filterInfo, setFilterInfo] = useState({});
    // {"launch_success": true, "launch_year": "2006"}



    useEffect(() => {
        fetchAllData();
    }, []);

    function fetchAllData() {
        let api = 'https://api.spacexdata.com/v3/launches';
        axios.get(api)
            .then(response => {
                // Handle the response
                console.log(response);
                setLaunchesData(response.data);
                setlaunchesDataBackup(JSON.parse(JSON.stringify(response.data)))
                let filterValuesList = new Set();
                for (let singleResponse of response.data) {
                    filterValuesList.add(singleResponse.launch_year)
                }
                setFilterValueList(filterValuesList)
            })
            .catch(error => {
                // Handle errors
                console.log(error);
                setShowErrorState(true);
            });
    }

    function fetchLaunchesData(filterBy, value) {
        let api = 'https://api.spacexdata.com/v3/launches';
        if (filterBy && value) {
            let tempFilterInfo = JSON.parse(JSON.stringify(filterInfo));
            tempFilterInfo[filterBy] = value;
            setFilterInfo(tempFilterInfo)
            for (let i = 0; i < Object.keys(tempFilterInfo).length; i++) {
                if (i == 0)
                    api += '?'
                else
                    api += '&'
                api += Object.keys(tempFilterInfo)[i] + '=' + tempFilterInfo[Object.keys(tempFilterInfo)[i]];
            }
        }

        axios.get(api)
            .then(response => {
                // Handle the response
                console.log(response);
                setLaunchesData(response.data);
                setlaunchesDataBackup(JSON.parse(JSON.stringify(response.data)))
            })
            .catch(error => {
                // Handle errors
                console.log(error);
                setShowErrorState(true);
            });
    }

    //here


    function addFilterOnData(filterBy, value) {
        let filteredlist = launchesDataBackup.filter(function (item) {
            if (item[filterBy])
                return item[filterBy].includes(value);
            return true;
        })
        setLaunchesData(filteredlist)
    }


    function addFilterOnApi(filterBy, value) {
        //Changes the filter directly from API
        fetchLaunchesData(filterBy, value);
    }





    return (
        <View>
            <Text><b>SpaceX Launches</b></Text>
            {showErrorState ? <ErrorState msg={"Please try after some time."} /> : (
                <>
                    <DropDownFilter handleFetchLaunchesData={fetchLaunchesData} label="Filter by Year" filterByCol="launch_year" data={[...filterValuesList]} />
                    <DropDownFilter handleFetchLaunchesData={fetchLaunchesData} label="Filter by Launch success" filterByCol="launch_success" data={["true", "false"]} />
                    <SearchBox handleFetchLaunchesData={addFilterOnData} />

                    <DataTable style={styles.container}>
                        <DataTable.Header style={styles.tableHeader}>
                            <DataTable.Title>Mission Patch</DataTable.Title>
                            <DataTable.Title>Mission Name</DataTable.Title>
                            <DataTable.Title>Launch Date Local</DataTable.Title>
                            <DataTable.Title>Rocket Name</DataTable.Title>
                            <DataTable.Title>Site Name</DataTable.Title>
                        </DataTable.Header>
                        {launchesList.map((item, id) => (
                            <DataTable.Row key={id}>
                                <DataTable.Cell><Image source={{ uri: item.links.mission_patch }} style={styles.imageSize} /></DataTable.Cell>
                                <DataTable.Cell>{item.mission_name}</DataTable.Cell>
                                <DataTable.Cell>{item.launch_date_local}</DataTable.Cell>
                                <DataTable.Cell>{item.rocket.rocket_name}</DataTable.Cell>
                                <DataTable.Cell>{item.launch_site.site_name}</DataTable.Cell>
                            </DataTable.Row>


                        ))}
                    </DataTable>
                </>
            )}

        </View>
    )
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
