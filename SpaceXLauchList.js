import SearchBox from './Component/SearchBox.js';
import DropDownFilter from './Component/DropDownFilter.js';
import { DataTable } from 'react-native-paper';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import ErrorState from './Component/ErrorState.js';
import Card from './Component/Card.js';
import { SafeAreaView } from 'react-native-web';
export default function SpaceXLauchList() {
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
            if (value == 'None') {
            delete tempFilterInfo[filterBy];
            }
            else{
                tempFilterInfo[filterBy] = value;
            }
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

    function addNoneValue(list) {
        list = [...list];
        list.unshift('None');
        return list;
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center"
        }}>
            <div style={styles.header}>SpaceX Launches</div>
            {showErrorState ? <ErrorState msg={"Please try after some time."} /> : (
                <>
                    

                    <Text>Filter By</Text>

                    <div style={{ display: "grid", gap: "45px", gridTemplateColumns: "1fr 1fr 1fr" }}>
                        <DropDownFilter handleFetchLaunchesData={fetchLaunchesData} label="Launch Year" filterByCol="launch_year" data={addNoneValue(filterValuesList)} />
                        <DropDownFilter handleFetchLaunchesData={fetchLaunchesData} label="Launch Status" filterByCol="launch_success" data={addNoneValue(["true", "false"])} />
                        <DropDownFilter handleFetchLaunchesData={fetchLaunchesData} label="Upcoming" filterByCol="upcoming" data={addNoneValue(["true", "false"])} />
                        <div  style={{gridColumnStart: 1, gridColumnEnd: 4}}>
                        <SearchBox handleFetchLaunchesData={addFilterOnData} />
                            </div>
                        {launchesList.map((item, id) => <Card key={id} item={item} />)}
                    </div>

                   

                    {/* <DataTable style={styles.container}>
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
                    </DataTable> */}

                </>
            )}

        </div>

    )
}
const styles = StyleSheet.create({

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        height: '100%'


    },

    header: {
        color: '#00d2ff',
        fontSize: 64,
    },

    imageSize: {
        height: '100px',
        width: '100px',
    }
});
