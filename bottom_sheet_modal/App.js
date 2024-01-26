import "react-native-gesture-handler";
import { View, Text } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Text>App</Text>
    </GestureHandlerRootView>
  )
}