import { StatusBar } from 'expo-status-bar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheet from './components/BottomSheet';
import { useCallback, useRef } from 'react';

export default function App() {
  const  bottomSheetRef = useRef(null)

  const expandHandler = useCallback(() => {
    bottomSheetRef.current?.expand()
  }, [])

  const closeHandler = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Button title='expand' onPress={() => expandHandler()} />
          <Button title='close' onPress={() => closeHandler()} />
          <BottomSheet ref={bottomSheetRef} snapTo={'50%'} backgroundColor='white' />
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    flex: 1,
    backgroundColor: '#000',
  },
});
