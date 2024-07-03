import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const CoinsDetailScreen = () => {

  const {params:{coinUuid}}=useRoute();
  return (
    <View>
      <Text>{coinUuid}</Text>
    </View>
  )
}

export default CoinsDetailScreen