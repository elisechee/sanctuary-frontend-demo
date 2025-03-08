import { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons"; // Import icons
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import SearchPlaces from '../search';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, []);

  const onPlaceSelected = ( region ) => {
    console.log('is it coming here');
    // const { lat, lng } = details.geometry.location;
    mapRef.current?.animateToRegion({
      ...region,
      latitudeDelta: 0.03,
      longitudeDelta: 0.03,
    }, 1000);
    console.log(region);
  };

  const onRightButtonPress = () => {
    if (location) {
      const { latitude, longitude } = location.coords;
      mapRef.current?.animateToRegion({
        latitude,
        longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
      }, 1000);
    }
    console.log('right button pressed');
  };

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchPlaces onPlaceSelected={onPlaceSelected} onRightButtonPress={onRightButtonPress }/>
      </View>
      
      {location ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.03, // Zoom level
            longitudeDelta: 0.03,
          }}
          showsUserLocation={true}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Current Location"
          />
          <Marker
            coordinate={{
              latitude: location.coords.latitude + 0.001,
              longitude: location.coords.longitude + 0.001,
            }}
            title="Another location"
          />
          <Marker
            coordinate={{
              latitude: location.coords.latitude - 0.002,
              longitude: location.coords.longitude - 0.002,
            }}
            title="Another location"
          />
        </MapView>
      ) : (
        <Text style={styles.paragraph}>Fetching location...</Text>
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    ...StyleSheet.absoluteFillObject,
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#184040',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  searchBarContainer: {
    position: 'absolute',
    top: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    // elevation: 5,
    shadowRadius: 10,
    borderRadius: 10,
    width: '90%',
    paddingTop: 30,
    paddingBottom: 25,
    height: 5,
    zIndex: 1,
    // backgroundColor: '#184040',
  },
  searchPlaces: {
    // position: 'absolute',
    // top: 50,
    // zIndex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  autocompleteContainer: {
    // position: 'absolute',
    // top: 50,
    // width: '90%',
    // zIndex: 1,
  },
  listView: {
    backgroundColor: 'white',
  },

});
// Removed incorrect useRef function definition


