import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Signup from './components/Signup';
import Login from './components/Login';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Signup />
    // </View>
    <NavigationContainer>
      <View>
        <Text>alkdjfllakdfj</Text>
        <Text>alkdjfllakdfj</Text>
        <Text>alkdjfllakdfj</Text>
        <Text>alkdjfllakdfj</Text>
      </View>
      <Tab.Navigator style={{width: '80%', margin: 'auto', backgroundColor: '#fff'}}>
        <Tab.Screen name='Login' component={Login} />
        <Tab.Screen name='Signup' component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
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
