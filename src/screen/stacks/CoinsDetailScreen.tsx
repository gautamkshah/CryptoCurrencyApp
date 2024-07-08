import { View, Text, ActivityIndicator, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { Image } from 'expo-image'
import numeral from 'numeral';
import { FetchCoinDetails, FetchCoinHistory } from '@/utils/cryptoapi';
import { useNavigation } from '@react-navigation/native';
import { format, set } from 'date-fns'
import { CartesianChart, Line, useChartPressState } from 'victory-native'
import { Circle, useFont } from '@shopify/react-native-skia'
import Animated, { SharedValue } from 'react-native-reanimated'
import { useQuery } from '@tanstack/react-query';
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj["


const CoinsDetailScreen = () => {
  const [lineData, setLineData] = useState([]);
  const [item, setItem] = useState<any>({})
  const navigation = useNavigation()


  const { params: { coinUuid } } = useRoute();
  
  const font = useFont(
    require('../../../assets/fonts/PlusJakartaSans-Regular.ttf'),
    12
  )
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  function ToolTip({ x, y }: { x: SharedValue<number>, y: SharedValue<number> }) {
    return <Circle cx={x} cy={y} r={8} color='red' />
  }
  const { data: CoinsDetails, isLoading: CoinDetailsLoading } = useQuery({
    queryKey: ['CoinDetails', coinUuid],
    queryFn: () => coinUuid && FetchCoinDetails(coinUuid)
  });

  const { data: CoinsHistory, isLoading: CoinHistoryLoading } = useQuery({
    queryKey: ['CoinHistory', coinUuid],
    queryFn: () => coinUuid && FetchCoinHistory(coinUuid)
  });
  
  // console.log("coinhisory", CoinsHistory)

  useEffect(() => {
    if (CoinsHistory && CoinsHistory.data) {
      console.log("CoinsHistory", CoinsHistory)
      const datasets = CoinsHistory.data.history.map((item: any) => ({
        price: parseFloat(item?.price),
        timestamp: item?.timestamp
      }))
      console.log("hello",datasets)
      setLineData(datasets)
    }
    if (CoinsDetails && CoinsDetails.data.coin) {
      
      setItem(CoinsDetails.data.coin)
    }
  }, [CoinsDetails, CoinsHistory])

  return (
    <View className='flex-1'>
      {
        CoinDetailsLoading || CoinHistoryLoading ? (
          <View className='absolute z-50 h-full w-full justify-center items-center'>
            <View className='h-full w-full justify-center bg-black opacity-[0.45]'>

            </View>

            <View className='absolute'>
              <ActivityIndicator color='white' size='large' />
            </View>

          </View>
        ) : (
          <SafeAreaView>
            <View className='flex-row items-center justify-between px-4'>
              <Pressable
                className='border-2 border-neutral-500 rounded-full p-1'
                onPress={() => navigation.goBack}>
                <MaterialIcons name='keyboard-arrow-left' size={24} color='gray' />

              </Pressable>
              <View>
                <Text className='text-lg font-bold'>
                  {item.symbol}
                </Text>
              </View>
              <View className='border-2 border-neutral-500 rounded-full p-1'>
                <Entypo name="dots-three-horizontal" size={24} color="black" />
              </View>


            </View>
            <View className='px-4 justify-center items-center py-2'>
              <Text className='font-extrabold text-2xl '>
                {numeral(parseFloat(item?.price)).format("$0,0.00")}

              </Text>

            </View>
            {
              item && (
                <View className='flex-row justify-center items-center space-x-2 px-4 py-2'>
                  <View className='flex-row w-full py-4 items-center' >
                    <View className='w-[16%]'>
                      <View className='w-10 h-10'>
                        <Image
                          source={{ uri: item.iconUrl }}
                          placeholder={blurhash}
                          contentFit='cover'
                          transition={1000}
                          className='w-full h-full flex-1' />

                      </View>
                    </View>

                    <View className='w-[55%] justify-start items-start'>
                      <Text className='text-lg font-bold'>{item.name}</Text>

                      <View className='justify-center flex-row items-center space-x-2'>
                        <Text className='font-medium text-sm text-neutral-500'>
                          {numeral(parseFloat(item.price)).format("$0,0.00")}
                        </Text>
                        <Text className={`font-medium text-sm ${item.change < 0 ? "text-red-600" : item.change > 0 ? "text-green-500" : "text-gray-600"}`}>
                          {item.change}%</Text>



                      </View>


                    </View>
                    <View className='w-[29%] justify-start items-end'>
                      <Text className='font-bold text-base'>{item.symbol}</Text>
                      <View className='flex-row justify-center items-center space-x-2'>
                        <Text className='font-medium text-sm text-neutral-500'>
                          {item?.marketCap?.length > 9 ? item.marketCap.slice(0, 9) : item.marketCap}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }
          </SafeAreaView>

        )
      }

      <View style={{ height: 400, paddingHorizontal: 10 }}>
       
        {/* {
        
          lineData && (
            <CartesianChart 
            chartPressState={state}
              axisOptions={{
                font,
                tickCount: 8,
                labelOffset: { x: -1, y: 0 },
                labelColor: 'green',
                formatXLabel: (ms) => format(new Date(ms * 1000), 'MM/dd'),
              }}
              data={lineData}
              xKey={'timestamp'}
              yKey={'price'}
            >
              {
                ({ points }) => (
                  <>
                    < Line points={points?.price} color='green' strokeWidth={2} />
                    {
                      isActive &&
                      <ToolTip
                        x={state.x.position}
                        y={state.y?.price.position}
                      />
                    }
                  </>
                )
              }
            </CartesianChart>
          )} */}
      </View>

      <View className='px-4 py-4'>
        {/* All time high*/}
        <View className='flex-row justify-between'>
          <Text className='text-base font-bold text-neutral-500'>
            All Time High
          </Text>
          <Text className='font-bold text-base'>
            {numeral(parseFloat(item.allTimeHigh?.price)).format("$0,0.00")}
          </Text>
        </View>

        <View className='flex-row justify-between'>
          <Text className='text-base font-bold text-neutral-500'>
            Number of Markets
          </Text>
          <Text className='font-bold text-base'>
            {numeral(parseFloat(item.numberOfMarkets)).format("0,0.00")}
          </Text>
        </View>
        {/*Number of Exchanges*/}
        <View className='flex-row justify-between'>
          <Text className='text-base font-bold text-neutral-500'>
            Number of Exchanges
          </Text>
          <Text className='font-bold text-base'>
            {numeral(parseFloat(item.numberOfExchanges)).format("0,0")}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default CoinsDetailScreen