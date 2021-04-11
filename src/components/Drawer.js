import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; import { DrawerContent } from './DrawerContent';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SliderScreen from '../screens/SliderScreen';
import { Dimensions } from 'react-native';


const screen = {
    HomeStackScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home"
        }
    },
    DetailsStackScreen: {
        screen: DetailsScreen,
        navigationOptions: {
            title: "Details"
        }
    }
}
const Drawer = createDrawerNavigator();
const { width, height } = Dimensions.get("window");

export default function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerStyle={{
                padding: 0,
                backgroundColor: '#c6cbef',
                width: width,
                height: height,
            }}
            drawerContentOptions={{
                activeTintColor: '#000000',
                itemStyle: { marginVertical: 1 },
            }}
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}
