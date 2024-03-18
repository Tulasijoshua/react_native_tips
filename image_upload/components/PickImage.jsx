import { View, Text, StyleSheet, Button, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function PickImage() {
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const imagePick = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log("Result: ", result);

        if (!result.cancelled) {
            setImage(result.assets);
        }
        // setImage(result.assets);
    };

    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Storage</Text>
    }

    console.log('My image: ', image)
  return (
    <View style={{flex: 1, paddingTop: 60, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='Pick Image' onPress={() => imagePick()} style={{marginTop: 30}} />
        <FlatList 
            data={image}
            renderItem={({item}) => {
                console.log('Real image', item.uri)
                return (
                    <View style={{flex: 1, width: 200, height: 200, borderColor: '#000', borderWidth: 1}}>
                        {/* {image &&  */}
                        <Image source={{uri: item.uri}} /> 
                        <Text>alksdfalkdjflaskd</Text>
                        {/* } */}
                </View>
                )
            }}
        />
        
    </View>
  )
}