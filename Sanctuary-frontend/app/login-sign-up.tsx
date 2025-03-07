import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from "expo-router";

export default function LoginOrSignUp() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Logo / Image */}
                  <Image 
                    source={require("../assets/images/leaf-in-circle.png")} 
                    style={styles.logo} 
                  />            
            <TouchableOpacity style={styles.button}
                onPress={() => router.push("/login")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}
                onPress={() => router.push("/signup")}>
                <Text style={styles.buttonText}>Sign Up</Text>
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
    button: {
      width: 182,
      height: 50,
      backgroundColor: '#F2E9D8',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      top: 100,
      marginTop: 10,
    },
    buttonText: {
      color: '#184040',
      fontSize: 15,
      fontWeight: '700',
    },
  });