import React, {useContext} from 'react'
import { UserContext } from '../user/utilities/UserContext'
import { NavigationContainer } from '@react-navigation/native';
import AssignmentNavigation from '../../../navigations/AssignmentNavigation';
import { UserNavigation } from '../../../navigations/UserNavigation';

const AppNavigation = () => {
    const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
        {isLoggedIn ? <AssignmentNavigation/> : <UserNavigation/>}
    </NavigationContainer>
  )
}

export default AppNavigation
