import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from './src/assets/colors'
import { UserProvider } from './src/components/app/user/utilities/UserContext'
import { AsmProvider } from './src/components/app/assignments/AsmContext'
import AppNavigation from './src/components/app/appNavigations/AppNavigation'

const App = () => {
  return (
    <UserProvider>
      <AsmProvider>
        <AppNavigation/>
      </AsmProvider>
    </UserProvider>
  )
}

export default App