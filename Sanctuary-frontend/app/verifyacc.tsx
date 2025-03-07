import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from "expo-router";

export default function VerifyAcc() {
    const router = useRouter();
    const [code, setCode] = useState(["", "", "", ""]); // Array for 4-digit code
    const inputs = useRef([]); // Refs for each input field

    const handleChange = (text, index) => {
        if (text.length > 1) return; // Prevent entering multiple characters
    
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
    
        // Move to next input
        if (text && index < 3) {
          inputs.current[index + 1].focus();
        }
    
        // If all digits are filled, navigate to the next page
        if (newCode.every((digit) => digit !== "")) {
          router.push("/profile-setup");
        }
      };
    
    return (
        <View style={styles.container}>
            {/* Title */}
                  <Text style={styles.title}>Verify Account</Text> 
                          
                  <View style={styles.inputContainer}>
                    {code.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (inputs.current[index] = ref)}
                        style={styles.input}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={(text) => handleChange(text, index)}
                    />
                    ))}
                </View>
                <Text style={styles.subtitle}>Resend Code?</Text>
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
        fontSize: 45,
        fontWeight: '700',
        lineHeight: 50,
        marginTop: 0,
        textShadowColor: 'rgba(243, 234, 216, 1.00)', // Similar to text-shadow
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
      },
      subtitle: {
        marginTop: 20,
        left: 100,
        color: "#F3EAD8",
      },
      inputContainer: {
        flexDirection: "row",
        gap: 10,
      },
      input: {
        width: 60,
        height: 100,
        backgroundColor: "#225454",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#F2E9D8",
        marginTop: 20,
      },
    });