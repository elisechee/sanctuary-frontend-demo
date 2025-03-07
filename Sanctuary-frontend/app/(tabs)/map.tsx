import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Map() {
  const router = useRouter();
  
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 34.0689,  // UCLA latitude
          longitude: -118.4452, // UCLA longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 34.0689, longitude: -118.4452 }}
          title="UCLA"
          description="University of California, Los Angeles"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#084141',
  },
  map: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
  },
});