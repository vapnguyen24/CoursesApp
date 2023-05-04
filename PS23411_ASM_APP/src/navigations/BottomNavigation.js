import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routes} from './utils';
import Home from '../screens/Assignment/Home/Home';
import Explore from '../screens/Assignment/Explore/Explore';
import Cart from '../screens/Assignment/Cart/Cart';
import Profile from '../screens/Assignment/Profile/Profile';
import { colors } from '../assets/colors';
import MyAssignment from '../screens/Assignment/MyAssignment/MyAssignment';
const Bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Bottom.Navigator

      initialRouteName={routes.home}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primaryBlue,
        headerShown: false,
        tabBarStyle: {height: 78, paddingVertical: 8},
        tabBarLabelStyle: {fontSize: 14, marginBottom: 12},
      })}>
      <Bottom.Screen
        name={routes.home}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) =>  {
            return focused ? (
              <Image source={require('../assets/icons/HomeActive.png')} />
            ) : (
              <Image source={require('../assets/icons/Home.png')} />
            );
          },
        }}
      />
      <Bottom.Screen
        name={routes.explore}
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/icons/SearchActive.png')} />
            ) : (
              <Image source={require('../assets/icons/Search.png')} />
            );
          },
        }}
      />
      <Bottom.Screen
        name={routes.myAssignment}
        component={MyAssignment}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/icons/CartActive.png')} />
            ) : (
              <Image source={require('../assets/icons/Cart.png')} />
            );
          },
        }}
      />
      <Bottom.Screen
        name={routes.profile}
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image source={require('../assets/icons/UserActive.png')} />
            ) : (
              <Image source={require('../assets/icons/User.png')} />
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigation;
