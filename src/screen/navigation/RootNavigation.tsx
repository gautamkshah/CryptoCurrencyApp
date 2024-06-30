import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {
  TransitionPresets, 
  createStackNavigator
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';
import Authnavigation from './Authnavigation';

const Stack = createStackNavigator()

const RootNavigation = () => {
  const [session, setSession] = useState(false)

  return (
    <NavigationContainer>

      <Stack.Navigator>
        {
          session ? (
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
          ) : (
            <Stack.Screen name="Authnavigation" component={Authnavigation} />
          )
        
        }
      </Stack.Navigator>
    <View>
      <Text>RootNavigation</Text>
    </View>
    </NavigationContainer>
  )
}

export default RootNavigation