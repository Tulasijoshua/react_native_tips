import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'

export default function CurrentLocation() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: 400, width: '100%'}}>
        {location.latitude && location.longitude ? (
            <View>
                <Text>Your current location is: {location.latitude} </Text>
                <Text>Your current location is: {location.longitude} </Text>

            </View>
        ) : (
            <View>
                <Text>{error ? error : 'Click the button to get location'}</Text>
            </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => {
            getLocation()
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