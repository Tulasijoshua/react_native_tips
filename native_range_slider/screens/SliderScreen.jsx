import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import InputRange from '../components/InputRange'

export default function SliderScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Input Range React Native</Text>
        <Text style={styles.subtitle}>reac-native-reanimated 2.x</Text>
        <View style={styles.content}>
            <InputRange />
        </View>
      <Text>SliderScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
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
    textAlign: 'center'
  }
})