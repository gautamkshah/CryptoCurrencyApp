import { View, Text } from 'react-native'
import React from 'react'
import {TransitionPresets,createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../tabs/home/HomeScreen'
import CoinsDetailScreen from '../../stacks/CoinsDetailScreen'

const Stack= createStackNavigator()

const HomeNavigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      ...TransitionPresets.SlideFromRightIOS,
      animationEnabled: true,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CoinDetails" component={CoinsDetailScreen} />
    </Stack.Navigator>
  )
}

export default HomeNavigation