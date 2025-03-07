import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRouter } from "expo-router";

export default function ProfileSetUp() {
    const router = useRouter();
    const [username, setUsername] = useState(""); // State for input
    const [password, setPassword] = useState(""); // State for input
    const [email, setEmail] = useState(""); // State for input


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                {/* Title */}
                <Text style={styles.title}>Welcome!</Text> 
                        
                {/* username */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your username"
                    placeholderTextColor="#2C6868F"
                    keyboardType="default"
                    value={username}
                    onChangeText={setUsername}
                />    
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    placeholderTextColor="#2C6868F"
                    keyboardType="default"
                    value={password}
                    onChangeText={setPassword}
                /> 
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    placeholderTextColor="#2C6868F"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />       
                <TouchableOpacity style={styles.button}
                    onPress={() => router.push("/allow-notifs")}>
                    <Image 
                    source={require("../assets/images/arrowbutton1.png")}/>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
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
        top: -25,
      },
      input: {
        top: -25,
        width: 300,
        height: 60,
        backgroundColor: "#225454",
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 18,
        color: "#F2E9D8",
        marginTop: 15, // Space between input and button
      },
      button: {
      width: 109,
      height: 38,
      backgroundColor: '#F2E9D8',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0,
    },
    buttonText: {
      color: '#184040',
      fontSize: 15,
      fontWeight: '700',
    },
  });