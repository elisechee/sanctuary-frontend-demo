import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/* Logo / Image */}
      <Image 
        source={require("../assets/images/leaf-in-circle.png")} 
        style={styles.logo} 
      />

      {/* Title */}
      <Text style={styles.title}>Welcome to Sanctuary!</Text>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button}
        onPress={() => router.push("/login-sign-up")}>

        <Text style={styles.buttonText}>Get Started</Text>
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
    width: 400,
    height: 600,
    position: 'absolute',
    top: 40,
    //boxShadow: '0px 0px 21px #D5CEC0', // Shadow isn't directly supported, use elevation for Android
  },
  title: {
    width: 356,
    textAlign: 'center',
    color: '#F3EAD8',
    fontSize: 50,
    fontWeight: '700',
    lineHeight: 50,
    marginTop: 200,
    textShadowColor: 'rgba(243, 234, 216, 1.00)', // Similar to text-shadow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  button: {
    width: 182,
    height: 50,
    backgroundColor: '#F2E9D8',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#184040',
    fontSize: 15,
    fontWeight: '700',
  },
});