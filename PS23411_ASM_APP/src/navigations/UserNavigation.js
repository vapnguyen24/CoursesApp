import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from './utils';
import Login from '../screens/User/Login/Login';
import Register from '../screens/User/Register/Register';


const Stack = createStackNavigator();

export const UserNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={routes.singin} screenOptions={{headerShown: false}}>
            <Stack.Screen name={routes.singin} component={Login}/>
            <Stack.Screen name={routes.register} component={Register}/>
        </Stack.Navigator>
    );
};