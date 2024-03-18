import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

export default function Card({ item }) {
    return (
        <>
            <div className="card" style={styles.card} >

                <div style={{textAlign: "-webkit-center"}} className="image"><Image source={{ uri: item.links.mission_patch }} style={styles.imageSize} />
                </div>
                <div className="missionName" style={{textAlign: "-webkit-center", padding: "18px"}}>
                    <Text style={{fontWeight: "bold", fontSize: 30}}>{item.mission_name}</Text>
                </div>
                <div className="rocketName">
                    <Text style={styles.content}><b>Rocket Name: </b> {item.rocket.rocket_name}</Text>
                </div>
                <div className="siteName">
                    <Text style={styles.content}><b>Launch Sight: </b> {item.launch_site.site_name}</Text>
                </div>
                <div className="launchLocal">
                    <Text style={styles.content}><b>Launch Date: </b> {item.launch_date_local}</Text>
                </div>
            </div>
        </>
    )
}
const styles = StyleSheet.create({
    card: {
        alignContent: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: "25px",
        boxShadow: "5px 8px 9px 5px lightblue"
    },

    imageSize: {

        justifyContent: 'center',
        height: '200px',
        width: '200px',
    },

    content: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },

});
