import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Ionicons } from '@expo/vector-icons';

const SearchPlaces = () => {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.autocompleteContainer}>
        <GooglePlacesAutocomplete
      
          placeholder="Search"
          fetchDetails
          onPress={(data, details = null) => {
            console.log(data, details);
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
        //   renderRightButton={() => (
        //     <View style={styles.iconContainer}>
        //       <Ionicons name="close-circle-outline" size={24} color="white" />
        //     </View>
        //   )}
     
        />
      </View>
     
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      width: '100%',
    },
    autocompleteContainer: {
    //   flex: 0,
    //   marginTop: 20, // Adjust the margin as needed to position the component lower
    //   width: '100%',
    //   zIndex: 1,
    },
    textInput: {
      backgroundColor: '#184040',
    //   opacity: 0.7,
      borderRadius: 5,
      color: 'white',
      padding: 10,
      fontSize: 16,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        width: 44,
        color: 'white',
        height: 44,
        borderRadius: 5,
        zIndex: 1,
        backgroundColor: '#184040',
      },
    listView: {
      opacity: 0.9,
      position: 'absolute',
      top: 50, // Adjust this value based on the height of the text input
      width: '100%',
      zIndex: 100,
    },
    confirmationText: {
      marginTop: 20,
      fontSize: 16,
      textAlign: 'center',
    },
  });

export default SearchPlaces;
