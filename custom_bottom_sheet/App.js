import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from './components/BottomSheet';
import { useState } from 'react';

export default function App() {
  const [status, setStatus] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => setStatus(true)} style={styles.button}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Launch Modal</Text>
      </TouchableOpacity>

      { status && <BottomSheet setStatus={ setStatus } />}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingHorizontal: 30, 
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#40A2E3'
  }
});
