import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';

export default function Card({ item }) {
    return (
        <>
            <div className="card" style={styles.card} >

                <div className="image"><Image source={{ uri: item.links.mission_patch }} style={styles.imageSize} />
                </div>
                <div className="missionName">
                    <Text><br></br></Text>
                    <Text style={styles.content}><b>Mission Name: </b>{item.mission_name}</Text>
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
        shadowColor: '#171717',
        alignContent: 'center',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        backgroundColor: 'white',
        borderRadius: 8,
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
