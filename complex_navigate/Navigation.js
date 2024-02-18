import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Feed from './screens/tabScreens/Feed';
import Settings from './screens/tabScreens/Settings';
import Notifications from './screens/tabScreens/Notifications';
import { Ionicons } from '@expo/vector-icons';
import TweetDetailScreen from './screens/homeStack/TweetDetailsScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Feed" component={Feed} />
            <HomeStack.Screen name="TweetDetailScreen" component={TweetDetailScreen} />
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
                    if (route.name === "HomeStackGroup") {
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
            <Tab.Screen name='HomeStackGroup' component={HomeStackGroup} 
                options={{headerShown: false, tabBarLabel: "@tulasi"}} 
            />
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup />
        </NavigationContainer>
    )
}