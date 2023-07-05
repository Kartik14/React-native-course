import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as locationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
import { withNavigationFocus } from 'react-navigation';
import TrackForm from '../components/Trackform';
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording, locations }, addLocation } = useContext(locationContext);

  const callback = useCallback((location) => {
    addLocation(location, recording);
  }, [recording]);
  const [err] = useLocation(recording || isFocused, callback);

  return <View style={styles.container}>
    <Text h2>Create new Track!</Text>
    <Map />
    {err
      ? <Text style={{ color: 'red' }}>
        Please enable location to create track
      </Text>
      : null}
    <TrackForm />
  </View>
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name='plus' size={20} />
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  }
});

export default withNavigationFocus(TrackCreateScreen);
