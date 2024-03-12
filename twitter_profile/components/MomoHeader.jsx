import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { WINDOW_HEIGHT } from '../constants'

export default function MomoHeader() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upperHeaderPlaceholder} />
        <View style={styles.header}></View>
        <ScrollView>
            <View style={styles.paddingForHeader} />
            <View style={styles.scrollViewContent} />
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upperHeaderPlaceholder: {},
    header: {
        position: 'absolute',
        width: '100%',
        height: 136,
        backgroundColor: '#AF0C6E'
    },
    paddingForHeader: {
        height: 136,
    },
    scrollViewContent: {
        height: WINDOW_HEIGHT * 2,
        backgroundColor: 'white'
    }
})