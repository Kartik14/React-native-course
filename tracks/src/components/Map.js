import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as locationContext } from '../context/locationContext';
import { ActivityIndicator } from 'react-native-paper';

const Map = () => {
    const { state: { currentLocation, locations }
    } = useContext(locationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    const initialLocation = {
        longitude: 75.7821695,
        latitude: 26.9568282,
    };

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                fillColor="rgba(3, 194, 252, 0.3)"
                strokeColor="rgba(3, 194, 252, 1.0)"
                strokeWidth={2}
            />
            <Polyline coordinates={locations.map(loc => loc.coords)} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;