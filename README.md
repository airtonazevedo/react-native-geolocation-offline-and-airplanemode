# React-native-geolocation-offline-and-airplanemode

A simple solution for offline location and airplane mode in react-native

### Instructions

* To obtain the location we use the [react-native-map-box-gl package](https://github.com/react-native-mapbox-gl/maps)
* Don't need access token

### Complete Example

~~~javascript
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

~~~


