import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function BottomSheet({snapTo}) {
    const {height} = Dimensions.get('screen')
    const closeHeight = height;
  return (
    <View style={[styles.container, {top: 500}]}>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    lineContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    line: {
        width: 50,
        height: 4,
        backgroundColor: 'black',
        borderRadius: 20,
    }
})