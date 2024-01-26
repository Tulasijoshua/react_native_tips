import {GestureHandlerRootView} from "react-native-gesture-handler";
import { View, Text, Button, StyleSheet, Switch } from 'react-native'
import React, { useRef } from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { StatusBar } from "expo-status-bar";

export default function App() {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["25%", "48%", "75%"];

  function handlePresentModal() {
      bottomSheetModalRef.current?.present();
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <View >
          <Button title="Present Modal" onPress={handlePresentModal} />
          <StatusBar style="auto" />
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            backgroundStyle={{borderRadius: 30}}
          >
            <View style={styles.contentContainer}>
              <Text style={styles.title}>Dark mode</Text>
              <View style={styles.row}>
                <Text>Dark mode</Text>
                <Switch />
              </View>
            </View>
          </BottomSheetModal>
        </View>
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
  },
  contentContainer: {
    flex: 1, 
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    fontWeight: "900"
  }
})