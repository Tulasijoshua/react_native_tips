import { StatusBar } from 'expo-status-bar';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheet from './components/BottomSheet';
import { useCallback, useRef } from 'react';
import Example from './components/Example';
import Lorem from './components/Lorem';
import BottomSheetScrollView from './components/BottomSheetScrollView';

export default function App() {
  const  bottomSheetRef = useRef(null)
  const  bottomSheetRef2 = useRef(null)
  const  bottomSheetRef3 = useRef(null)

  const pressHandler = useCallback(() => {
    bottomSheetRef.current?.expand()
  }, [])

  const pressHandler2 = useCallback(() => {
    bottomSheetRef2.current?.expand()
  }, [])

  const pressHandler3 = useCallback(() => {
    bottomSheetRef3.current?.expand()
  }, [])

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Button title='Blank' onPress={() => pressHandler()} />
          <Button title='Example' onPress={() => pressHandler2()} />
          <Button title='ScrollView' onPress={() => pressHandler3()} />
          <BottomSheet 
            ref={bottomSheetRef} 
            snapTo={'50%'} backgroundColor='white' 
            backDropColor='black' 
          />
          <BottomSheet 
            ref={bottomSheetRef2} 
            snapTo={'60%'} backgroundColor='#ffe7cf'
            backDropColor='black' 
          >
            <Example />
          </BottomSheet>
          <BottomSheetScrollView
            ref={bottomSheetRef3} 
            snapTo={'50%'} backgroundColor='white'
            backDropColor='black' 
          >
            <Lorem />
          </BottomSheetScrollView>
        </SafeAreaView>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    flex: 1,
    backgroundColor: '#fff',
  },
});
