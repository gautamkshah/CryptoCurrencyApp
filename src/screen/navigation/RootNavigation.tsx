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

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          animationEnabled:true,
          gestureEnabled:true,
          gestureDirection:'horizontal'
        
        }}>
        {
          session ? (
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
          ) : (
            <Stack.Screen name="Authnavigation" component={Authnavigation} />
          )
        
        }
      </Stack.Navigator>
   
    </NavigationContainer>
  )
}

export default RootNavigation