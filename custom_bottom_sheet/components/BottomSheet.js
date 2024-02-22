import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function BottomSheet() {
  return (
    <View style={styles.backdrop}>
      <View style={styles.bottomSheet}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login / Signup</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        flex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    bottomSheet: {
        width: '100%',
        height: '40%',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 15, 
        paddingVertical: 20,
    }
})