import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {routes} from './utils';
import BottomNavigation from './BottomNavigation';
import DetailProfile from '../screens/Assignment/DetailProfile/DetailProfile';
import UpdateProfile from '../screens/Assignment/UpdateProfile/UpdateProfile';
import DetailAsm from '../screens/Assignment/DetailAsm/DetailAsm';
import MyAssignment from '../screens/Assignment/MyAssignment/MyAssignment';
import SearchAssignment from '../screens/Assignment/SearchAssignment/SearchAssignment';
import AssignmentsByCategory from '../screens/Assignment/AssignmentsByCategory/AssignmentsByCategorys';

const Stack = createStackNavigator();
const AssignmentNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={routes.bottomMenu}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.bottomMenu} component={BottomNavigation} />

      <Stack.Screen name={routes.detailProfile} component={DetailProfile} />

      <Stack.Screen name={routes.updateProfile} component={UpdateProfile} />

      <Stack.Screen name={routes.detailAsignment} component={DetailAsm} />

      <Stack.Screen name={routes.myAssignment} component={MyAssignment} />

      <Stack.Screen
        name={routes.searchAssignment}
        component={SearchAssignment}
      />

      <Stack.Screen name={routes.assignmentsByCategory} component={AssignmentsByCategory}/>
    </Stack.Navigator>
  );
};

export default AssignmentNavigation;
