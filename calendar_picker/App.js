import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from './components/CalendarPicker';
import CommDatePicker from './components/CommDatePicker';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CalendarPicker /> */}
      <CommDatePicker />
      <StatusBar style="auto" />
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
});
