import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo/Radiant Glow Logo (1).png')} style={styles.logo} />

            
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/bell icon.png')} style={styles.button} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/icons/burger button.png')} style={styles.button} />
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#605678',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    logo: {
        width: 70,
        height: 70,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 5,
    },
    button: {
        width: 30,
        height: 30,
    },
    
});