import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Feed from './screens/tabScreens/Feed';
import Settings from './screens/tabScreens/Settings';
import Notifications from './screens/tabScreens/Notifications';
import { Ionicons } from '@expo/vector-icons';
import TweetDetailScreen from './screens/homeStack/TweetDetailsScreen';
import Payments from './screens/drawerScreens/Payments';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontWeight: 'bold'
                },
                tabBarIndicatorStyle: {
                    height: 3,
                    borderRadius: 5,
                    backgroundColor: "#1DA1F2"
                }
            }}
        >
            <TopTabs.Screen name="main" component={Feed} />
            <TopTabs.Screen name="Following" component={Payments} />
            <TopTabs.Screen name="👀" component={Payments} />
        </TopTabs.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="TabGroup" component={TabGroup} options={{headerShown: false}} />
            <HomeStack.Screen 
                name="TweetDetailScreen" 
                component={TweetDetailScreen} 
                options={{presentation: "modal"}}
            />
        </HomeStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator 
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "settings-sharp";
                    } else if (route.name === "Notifications") {
                        iconName = focused ? "notifications" : "notifications-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#1DA1F2",
                tabBarInactiveTintColor: "gray"
            })}
        >
            <Tab.Screen name='Feed' component={TopTabsGroup} 
                options={{tabBarLabel: "@tulasi"}} 
            />
            {/* <Tab.Screen name='Feed' component={Feed} 
                options={{tabBarLabel: "@tulasi"}} 
            /> */}
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

const Drawer = createDrawerNavigator();

function DrawerGroup() {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
            <Drawer.Screen name="Payments" component={Payments} options={{headerShown: true}} />
        </Drawer.Navigator>
    )
}

export default function Navigation() {
    const currentTheme = useColorScheme();
    return (
        <NavigationContainer
            theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <StatusBar style='auto' />
            <DrawerGroup />
            {/* <HomeStackGroup /> */} 
        </NavigationContainer>
    )
}