import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


export default function AllowNotifs() {
  const router = useRouter();

  return (
    <View style={styles.container}>

    {/* Title */}
    <Text style={styles.title}>Allow Notifications</Text>

      {/* Logo / Image */}
      <Image 
        source={require("../assets/images/screenshot-20250304-at-43634-pm-1.png")} 
        style={styles.logo} 
      />
      <TouchableOpacity style={styles.button}
        onPress={() => router.push("/allow-location")}>

        <Text style={styles.buttonText}>Allow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#184040',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    width: 325,
    height: 325,
    borderRadius: 36,
    top: 10,
    //boxShadow: '0px 0px 21px #D5CEC0', // Shadow isn't directly supported, use elevation for Android
  },
  title: {
    width: 356,
    textAlign: 'center',
    color: '#F3EAD8',
    fontSize: 35,
    fontWeight: '700',
    lineHeight: 50,
    marginTop: 0,
    textShadowColor: 'rgba(243, 234, 216, 1.00)', // Similar to text-shadow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  button: {
    width: 182,
    height: 50,
    backgroundColor: '#F2E9D8',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#184040',
    fontSize: 15,
    fontWeight: '700',
  },
});