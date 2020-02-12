/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { View, Text, ActivityIndicator } from "react-native";

const isGranted = MapboxGL.requestAndroidLocationPermissions();

const App = () => {

  let [userLocation, setUserLocation] = useState([]);

  const onUserLocationUpdate = newUserLocation => {
    setUserLocation([
      newUserLocation.coords.longitude,
      newUserLocation.coords.latitude,
    ]);
    console.log(newUserLocation)
  }

  console.log(userLocation)

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <MapboxGL.UserLocation
        onUpdate={onUserLocationUpdate}
      />
      <Text>Geoposition</Text>

      {userLocation.length == 0 ? <ActivityIndicator /> : <Text>{`Latitude: ${userLocation[1]} and Longitude: ${userLocation[0]}`}</Text>}
    </View>
  );
};

export default App;
