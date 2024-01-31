import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function InputRange({min, max, steps, title, onValueChange}) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rangeContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#eee',
        borderTopWidth: 1,
        borderColor: '#cccdb2',
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        color: '#777',
        fontSize: 12,
    },
    rangeContainer: {

    }
})