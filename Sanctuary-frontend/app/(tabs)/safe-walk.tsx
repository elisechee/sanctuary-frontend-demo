import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SafeWalk() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Start a Safe Walk</Text>
      <View style={styles.safewalkContainer}>
        <GooglePlacesAutocomplete
          placeholder="Your location"
          query={{
            key: 'AIzaSyC6o-C0T6-uZPzxqFglSGgAgKkt-pf26bY', // Replace with your actual API key
            language: 'en',
          }}
          styles={{
            container: styles.autocompleteContainer,
            listView: styles.swlistView1,
            textInput: styles.swtext,
            
          }}
          renderLeftButton={() => (
            <View style={styles.iconContainer}>
                <Ionicons name="location-outline" size={35} color="#F2E9D8" />
            </View>
          )}
        />
      </View>

      <Image 
        source={require('../../assets/images/safewalk_line.png')}
        style={styles.image}
      />
     
      <View style={styles.safewalkContainer2}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          query={{
            key: 'AIzaSyC6o-C0T6-uZPzxqFglSGgAgKkt-pf26bY', // Replace with your actual API key
            language: 'en',
          }}
          styles={{
            listView: styles.swlistView2,
            textInput: styles.swtext,
            container: styles.autocompleteContainer,
          }}
          renderLeftButton={() => (
            <View style={styles.iconContainer}>
                <Ionicons name="location-outline" size={35} color="#F2E9D8" />
            </View>
          )}
        />
      </View>
      {/* <View>
         <TouchableOpacity>
             <Ionicons name="navigate" size={24} color="#D99B84" />
        </TouchableOpacity>
      </View> */}

  <View style={styles.linkingButton}>
      <Button 
        title="Turn on Linking" 
        onPress={() => alert('Linking turned on!')}
        color="white"
      />
    </View>
      

      {/* <View style={styles.safewalkContainer}>
        <GooglePlacesAutocomplete
      
          placeholder="Search"
          fetchDetails
          onPress={(data, details = null) => {
            console.log(data, details);
            // if (details) {
            //   const { lat, lng } = details.geometry.location;
            //   onPlaceSelected({ latitude: lat, longitude: lng });
            // }
          }}
          query={{
            key: 'AIzaSyC6o-C0T6-uZPzxqFglSGgAgKkt-pf26bY', // Replace with your actual API key
            language: 'en',
          }}
          styles={{
            container: styles.autocompleteContainer,
            textInput: styles.textInput,
            listView: styles.listView,
          }}
          renderLeftButton={() => (
            <View style={styles.iconContainer}>
                <Ionicons name="search-outline" size={24} color="white" />
            </View>
          )}
          renderRightButton={() => (
            <TouchableOpacity style={styles.iconContainer2} onPress={onRightButtonPress}>
              <Ionicons name="navigate" size={24} color="#D99B84" />
            </TouchableOpacity>
          )}
     
        />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#194040',
 
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
  text: {
    fontSize: 30,
    marginTop: 100,
    position: 'absolute',
    top: 10,
    left: 30,
    fontWeight: 'bold',
    color: '#F2E9D8',
  },
  image: {
    position: 'absolute',
    top: 230,
    left: 36,
  },
  safewalkContainer: {
    position: 'absolute',
    top: 180,
    width: '90%',
    backgroundColor: '#194040',
  },
  safewalkContainer2: {
    position: 'absolute',
    top: 270,
    width: '90%',
    marginBottom: 20,
    backgroundColor: '#194040',
  },
  swlistView1: {
    position: 'fixed',
    top: 120,
    width: '100%',
  },
  swlistView2: {
    position: 'fixed',
    top: 20,
    width: '100%',
  },
  swtext: {
    color: '#F2E9D8',
    backgroundColor: '#225454',
  },
  linkingButton: {
    marginTop: 300,
    backgroundColor: '#225454',
    borderRadius: 10,
    padding: 5,
    position: 'absolute',
    top: 370,
  },

  autocompleteContainer: {
    color: '#225454',
  }

});