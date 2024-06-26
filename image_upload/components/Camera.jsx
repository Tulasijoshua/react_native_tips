import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Camera() {
    
  const imagePicker = () => {
    let options = {
      mediaType: 'photo',
      includeBase64: false,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('ImagePicker Response: ', response);
      }
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 400, width: '100%'}}></View>

      <TouchableOpacity
        onPress={() => {
          imagePicker()
        }}
        style={{
          marginTop: 20,
          height: 50,
          width: '60%',
          backgroundColor: 'skyblue',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}>
          <Text style={{fontSize: 20}}>Gallery</Text>
        </TouchableOpacity>
    </SafeAreaView>
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