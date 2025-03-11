import { View, Text, TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

const screen1 = () => {
    const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">

      <View className="w-full">
        <Text className="text-4xl font-medium text-black">Healthy eating.</Text>
        <Text className="text-4xl font-bold text-black">Simplified.</Text>
      </View>

      <Image 
        source={require("../../assets/images/logo.png")} 
        className="w-72 h-72 my-10"
        resizeMode="contain"
      />


      <View className="w-full flex-row justify-between items-center px-4">

        <TouchableOpacity onPress={() => router.push('/(welcome)/screen2-in')}>
          <Text className="text-gray-500 text-lg">Skip</Text>
        </TouchableOpacity>


        <TouchableOpacity 
          onPress={() => router.push('/screen2')}
          className="flex-row items-center bg-black px-6 py-3 rounded-full"
        >
          <Text className="text-white text-lg font-bold">Next</Text>
          <Entypo name="chevron-right" size={20} color="white" className="ml-2"/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default screen1