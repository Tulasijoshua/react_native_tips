import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function generateTweets(limit) {
  return new Array(limit).fill(0).map((_, index) => {
    const repetitions = Math.floor(Math.random() * 3) + 1;

    return {
      key: index.toString(),
      text: 'Lorem ipsum dolor amet '.repeat(repetitions),
      author: 'Arnaud',
      tag: 'eveningkid',
    };
  });
}

const TWEETS = generateTweets(30);
const HEADER_HEIGHT_EXPANDED = 35;
const HEADER_HEIGHT_NARROWED = 90;

const PROFILE_PICTURE_URI =
  'https://pbs.twimg.com/profile_images/975388677642715136/7Hw2MgQ2_400x400.jpg';

const PROFILE_BANNER_URI =
  'https://pbs.twimg.com/profile_banners/3296259169/1438473955/1500x500';

  export default function WrappedApp() {
    // Keeps notches away
    return (
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    );
  }

function App() {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View>
        <Text>This is real text!!!</Text>
      </View>
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