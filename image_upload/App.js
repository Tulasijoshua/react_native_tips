import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Camera from './components/Camera';
import ImagePicker from './components/ImagePicker02';
import PickImage from './components/PickImage';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Camera /> */}
      {/* <ImagePicker /> */}
      <PickImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
