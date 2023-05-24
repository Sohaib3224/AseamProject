import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Welcome from './src/screens/Welcome'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/screens/navigation/StackNavigation'
import { Provider } from 'react-redux'
import { Store } from './src/redux/store'


const App = () => {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})