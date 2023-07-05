import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const track = navigation.getParam('item');
  const initialCoords = track.locations[0].coords;

  return <>
    <Text style={{ fontSize: 48 }}>{track.name}</Text>
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialCoords,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      <Polyline coordinates={track.locations.map(loc => loc.coords)} />
    </MapView>
  </>
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;
