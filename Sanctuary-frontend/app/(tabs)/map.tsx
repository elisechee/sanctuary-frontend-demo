// import { PROVIDER_GOOGLE } from 'react-native-maps';
// import MapView, { Marker } from 'react-native-maps';
// import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Map() {
//   const router = useRouter();
  
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 34.0689,  // UCLA latitude
//           longitude: -118.4452, // UCLA longitude
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 34.0689, longitude: -118.4452 }}
//           title="UCLA"
//           description="University of California, Los Angeles"
//         />
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#084141',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//     opacity: 0.85,
//   },
//   button: {
//     position: 'absolute',
//     bottom: 20,
//     right: 20,
//     width: 50,
//     height: 50,
//   },
// });

import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons"; // Import icons

export default function Map() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');

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

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    
    <View style={styles.container}>
      {/* <StatusBar hidden /> */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search-outline" size={20} color="#ffffff"/>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            placeholderTextColor="#B6B3AC"
            value={search}
            onChangeText={setSearch}
          />
      </View>
      
      {location ? (
        <MapView
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
  );
}

const styles = StyleSheet.create({

  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#184040',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  searchBar: {
    flex: 1,
    color: '#ffffff',
    fontSize: 15,
    marginLeft: 5,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#084141',
    borderRadius: 28,
    width: '90%',
    padding: 10,
    zIndex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
