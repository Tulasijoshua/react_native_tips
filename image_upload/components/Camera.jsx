import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Camera() {
    const openCamera = () => {
        // const granted = 
    }
  return (
    <View style={StyleSheet.container}>
      <TouchableOpacity onPress={openCamera} style={styles.button}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebebeb',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: '#233f49',
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginTop: 50,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 18,
        color: '#ebebeb',
        fontWeight: 'bold',
      },
      imageStyle: {
        height: 150,
        width: 150,
        marginTop: 20,
        borderRadius: 5,
      },    
})