import { View, Text } from 'react-native'
import React from 'react'

export default function BackDrop({ topAnimation, openHeight, closeHeight, close}) {
  return (
    <View style={styles.container}>
      <Text>BackDrop</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        display: 'none'
    }
})