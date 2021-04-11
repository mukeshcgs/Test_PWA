/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, ScrollView, TextInput, StatusBar, StyleSheet, Button, Image, Text, useColorScheme, View, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import {  createDrawerNavigator,  DrawerContentScrollView,  DrawerItemList,  DrawerItem,} from '@react-navigation/drawer';
// import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SliderScreen from './screens/SliderScreen';
// import MyDrawer from './components/Drawer';

// import { DrawerContent } from './components/DrawerContent';
// const Drawer = createDrawerNavigator();

const Stack = createStackNavigator(); 1

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  // function LogoTitle() {
  //   return (

  //     <Image style={{ width: 50, height: 50 }} source={require('../assets/ms-icon-144x144.png')} />
  //    
  //   );
  // }
  // contentComponent: props => <DrawerNavigatorItems {...this.props} />

  return (<>
    {/* <SafeAreaProvider> */}
    <NavigationContainer>
      {/* <MyDrawer /> */}

      {/* <SafeAreaView style={backgroundStyle}> */}
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor="#363636" /> */}
      <Stack.Navigator
        initialRouteName="Slider"
        headerMode="none"
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',

          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Slider" component={SliderScreen} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <LoginScreen />
      </View> */}
      {/* </SafeAreaView> */}
    </NavigationContainer>
    {/* </SafeAreaProvider> */}
  </>);
};
// const styles = StyleSheet.create({
//     height: (Platform.OS === 'web') ? 200 : 100,
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

export default App;
