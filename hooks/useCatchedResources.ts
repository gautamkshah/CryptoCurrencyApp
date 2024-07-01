import * as Font from 'expo-font'
import { useState, useEffect } from 'react'
import {FontAwesome} from '@expo/vector-icons'
import * as SplashScreen from 'expo-splash-screen'

export default function useCatchedResources() {
    const [isLoadingComplete,setisLoadingComplete]=useState(false)

    useEffect(()=>{
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync()
                await Font.loadAsync({
                    PlusJakartaSans: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
                    PlusJakartaSansExtraBold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
                    PlusJakartaSansBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
                    PlusJakartaSansMedium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
                    PlusJakartaSansBoldItalic: require('../assets/fonts/PlusJakartaSans-BoldItalic.ttf'),
                    PlusJakartaSansMediumItalic: require('../assets/fonts/PlusJakartaSans-MediumItalic.ttf'),

                    ...FontAwesome.font
                })
            } catch (e) {
                alert(e)
            } finally {
                setisLoadingComplete(true)
                SplashScreen.hideAsync()
            }
        }
        loadResourcesAndDataAsync()

    },[])

    return isLoadingComplete

}