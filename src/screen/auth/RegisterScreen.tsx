import { View, Text, ActivityIndicator, Dimensions, TextInput, Pressable, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Button from '@/src/components/Button'
import Breaker from '@/src/components/Breaker'
import ButtonOutline from '@/src/components/ButtonOutline'
import { AntDesign } from '@expo/vector-icons'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { supabase } from '@/lib/supabase'



const { width, height } = Dimensions.get('window')


const RegisterScreen = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, setisLoading] = React.useState(false)
  const { navigate: navigateAuth }:NavigationProp<AuthNavigationType> = useNavigation()

  async function signUpWithEmail() {
    setisLoading(true)
    const {
      data: {session},
      error,
    }= await supabase.auth.signUp({
      email:email,
      password:password,
    })
    if(!session){
      Alert.alert("Registered Successfully!!,Plese check your inbox for verification!")
    }
    if(error){
      setisLoading(false)
    }else{
      setisLoading(false)
    }
    
    
  }



  return (
    <View className='flex-1'>
      {
        isLoading && (
          <View className="absolute z-50 h-full w-full justify-center items-center">
            <View className='h-full w-full justify-center items-center bg-black opacity-[0.45]'>
            </View>
            <View className='absolute'>
              <ActivityIndicator size='large' color='white' />
            </View>
          </View>
        )
      }
      <View className='justify-center flex-1 items-center relative'>
        <View className='w-full space-y-4 px-4 justify-center'
          style={{
            height: height * 0.75
          }}
        >
          {/* Wwelcome text */}
          <Animated.View className="justify-center items-center"
            entering={FadeInDown.duration(100).springify()}>
            <Text className='text-neutral-800 text-2xl leading-[60px]'
              style={{
                fontFamily: 'PlusjakartasansBold'
              }}>Register to join us</Text>
            <Text className='text-neutral-500 text-sm font-medium'>
              Welcome! Please enter your details.
            </Text>

          </Animated.View>

          {/* Input fields */}
          <Animated.View className='py-8 space-y-8'
            entering={FadeInDown.duration(100).delay(200).springify()}>
            {/* Email */}
            <View className='border-2 border-gray-400 rounded-lg'>
              <TextInput className='p-4'
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder='Email'
                autoCapitalize='none' />
            </View>

            {/* Password */}
            <View className='border-2 border-gray-400 rounded-lg'>
              <TextInput className='p-4'
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder='Password'
                secureTextEntry={true} />
            </View>

          </Animated.View>

          {/* Login Button */}
          <Animated.View className='justify-start w-full'
            entering={FadeInDown.duration(100).delay(400).springify()}>
            <View className='pb-6'>
              <Button title={'Register'} action={()=>signUpWithEmail()} />
            </View>
          </Animated.View>

          {/*breaker Line*/}
          <View >
            <Breaker />
          </View>

          {/*Continue to Google*/}
          <View className='w-full justify-normal'>
            <Animated.View
              entering={FadeInDown.duration(100).delay(600).springify()}
              className="border border-white pb-4"
            >
              <ButtonOutline title="Continue with Google">
                <AntDesign name="google" size={20} color="gray" />
              </ButtonOutline>

            </Animated.View>
          </View>
          {/*Dont have an account*/}
          <Animated.View className='justify-center items-center flex-row'
            entering={FadeInDown.duration(100).delay(700).springify()}>
            <Text className='text-neutral-500 text-lg leading-[30px] text-right font-medium'
              style={{
                fontFamily: 'PlusJakartaSansMedium'
              }}
            >
              Have an account?
            </Text>
            <Pressable onPress={()=> navigateAuth("Login")}>
              <Text className='text-primary-800 text-lg leading-[30px] text-right font-medium '
              style={{
                fontFamily: 'PlusJakartaSansBold'
              }}> Login{" "}</Text>
          </Pressable>
        </Animated.View>



      </View>
    </View>
    </View >
  )
}

export default RegisterScreen