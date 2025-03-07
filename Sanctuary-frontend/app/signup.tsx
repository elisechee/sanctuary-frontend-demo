import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from "expo-router";

export default function SignUp() {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState(""); // State for input

    return (
        <View style={styles.container}>
            {/* Title */}
                  <Text style={styles.title}>Welcome!</Text> 
                          
            {/* Phone Number Input */}
            <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                placeholderTextColor="#2C6868F"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
            />        

            <TouchableOpacity style={styles.button}
                onPress={() => router.push("/verifyacc")}>
                <Image 
                source={require("../assets/images/arrowbutton1.png")}/>
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
    title: {
        width: 356,
        textAlign: 'center',
        color: '#F3EAD8',
        fontSize: 50,
        fontWeight: '700',
        lineHeight: 50,
        marginTop: 0,
        textShadowColor: 'rgba(243, 234, 216, 1.00)', // Similar to text-shadow
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
      },
      input: {
        width: 300,
        height: 78,
        backgroundColor: "#225454",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        color: "#F2E9D8",
        marginTop: 20, // Space between input and button
      },
      button: {
      width: 109,
      height: 38,
      backgroundColor: '#F2E9D8',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 25,
    },
    buttonText: {
      color: '#184040',
      fontSize: 15,
      fontWeight: '700',
    },
  });