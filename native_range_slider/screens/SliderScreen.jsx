import { View, Text, SafeAreaView, StyleSheet, Platform } from 'react-native'
import React from 'react'
import InputRange from '../components/InputRange'

export default function SliderScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Input Range React Native</Text>
        <Text style={styles.subtitle}>reac-native-reanimated 2.x</Text>
        <View style={styles.content}>
            <InputRange min={1950} max={2022} title="Year" steps={1} onValueChange={(range) => console.log(range)} />
        </View>
      <Text>SliderScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    color: '#555',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 16
  }
})