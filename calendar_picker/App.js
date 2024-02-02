import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from './components/CalendarPicker';
import CommDatePicker from './components/CommDatePicker';
import CommDateOnShow from './components/CommDateOnShow';

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarPicker />
      {/* <CommDatePicker /> */}
      {/* <CommDateOnShow /> */}
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
