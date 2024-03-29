import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import Fav from './assets/favicon.png';

export default function App() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontSize: 40, marginVertical: 40, color: 'black', textAlign: 'center'}}>React Native Share</Text>
      <TouchableOpacity onPress={onShare} style={{marginTop: 30, alignItems: 'center', backgroundColor: 'cyan', padding: 5}}>
        <Text style={{fontSize: 15, fontWeight: '500', textTransform: 'capitalize'}}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
