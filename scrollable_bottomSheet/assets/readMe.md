install animation dependencies
npx expo install react-native-reanimated

- Add the plugin to the babel.config
plugins: [
      ...
      'react-native-reanimated/plugin',
    ],