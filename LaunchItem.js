import { View, Text, StyleSheet, Image } from 'react-native';
import { DataTable } from 'react-native-paper'; 

function LaunchItem({ item }) {

    return (

        // Table

        <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title>Mission Patch</DataTable.Title>
                <DataTable.Title>Mission Name</DataTable.Title>
                <DataTable.Title>Launch Date Local</DataTable.Title>
                <DataTable.Title>Rocket Name</DataTable.Title>
                <DataTable.Title>Site Name</DataTable.Title>
            </DataTable.Header>           
            <DataTable.Row>
                <DataTable.Cell><Image source={{ uri: item.links.mission_patch }} style={styles.imageSize} /></DataTable.Cell>
                <DataTable.Cell>{item.mission_name}</DataTable.Cell>
                <DataTable.Cell>{item.launch_date_local}</DataTable.Cell>
                <DataTable.Cell>{item.rocket.rocket_name}</DataTable.Cell>
                <DataTable.Cell>{item.launch_site.site_name}</DataTable.Cell>
            </DataTable.Row>
        </DataTable>

    );
}
const styles = StyleSheet.create({
    imageSize: {
        height: '100px',
        width: '100px',
    }
});

export default LaunchItem;
