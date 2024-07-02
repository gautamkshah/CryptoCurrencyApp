import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import RootNavigation from './src/screen/navigation/RootNavigation';
import useCatchedResources from './hooks/useCatchedResources';
import { useUserStore } from './store/useUserStore';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const App = () => {

  const isLoadingComplete = useCatchedResources()
  const queryClient = new QueryClient()


  const { session, user } = useUserStore()
  useEffect(() =>
    console.log(user, session), [user, session]
  )


  if (!isLoadingComplete) {
    return null
  }




  return (
    <Container>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
      <RootNavigation />
      </QueryClientProvider>

    </Container>
  );
};

export default App


const Container = styled(View)`
   flex:1;
`;
