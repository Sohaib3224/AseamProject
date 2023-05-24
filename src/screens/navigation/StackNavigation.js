import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Welcome'
import Login from '../Login'
import Signup from '../Signup'
import Home from '../Home'
import CourseOutline from '../CourseOutline'
import Cart from '../Cart'
import Instructors from '../Instructors'

const StackNavigation = () => {

  const stack = createNativeStackNavigator()

  return (
    <stack.Navigator initialRouteName='Welcome'>
      <stack.Screen options={{ headerShown: false }} name='Welcome' component={Welcome} />
      <stack.Screen options={{ headerShown: false }} name='Signup' component={Signup} />
      <stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
      <stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
      <stack.Screen options={{ headerShown: false }} name='CourseOutline' component={CourseOutline} />
      <stack.Screen options={{ headerShown: false }} name='Cart' component={Cart} />
      <stack.Screen options={{ headerShown: false }} name='Instructors' component={Instructors} />
    </stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})