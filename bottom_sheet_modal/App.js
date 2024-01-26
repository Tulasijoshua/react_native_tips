import {GestureHandlerRootView} from "react-native-gesture-handler";
import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { StatusBar } from "expo-status-bar";

export default function App() {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["48%"];

  function handlePresentModal() {
      bottomSheetModalRef.current?.present();
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Button title="Present Modal" onPress={handlePresentModal} />
        <StatusBar style="auto" />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  }
})