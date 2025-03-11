import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native'; 

const Screen3 = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 justify-between">
      {/* Top Text Section */}
      <View className="mt-20">
        <Text className="text-3xl font-bold text-black text-center">
          What goal do you have in mind?
        </Text>
      </View>

      {/* Options Section */}
      <View className="">
        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg flex-row items-cente">
          <Image
            source={require('../../assets/images/broc.jpeg')} 
            className="w-8 h-8 mr-4 rounded-2xl"
            style={styles.image}
          />
          <Text className="text-lg font-medium text-black">Lose weight</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg flex-row items-center my-6">
          <Image
            source={require('../../assets/images/avo.jpeg')} 
            className="w-8 h-8 mr-4 rounded-2xl"
            style={styles.image}
          />
          <Text className="text-lg font-medium text-black">Maintain weight</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg flex-row items-center">
          <Image
            source={require('../../assets/images/meat.jpg')} 
            className="w-8 h-8 mr-4 rounded-2xl"
            style={styles.image}
          />
          <Text className="text-lg font-medium text-black">Gain weight</Text>
        </TouchableOpacity>
      </View>

      {/* Info Text Section */}
      <View className="items-center">
        <Text className="text-sm text-gray-500 text-center">
          We use this info to calculate and provide you with daily recommendations
        </Text>
      </View>

      {/* Bottom Button Section */}
      <View className="mb-10 items-center">
        <TouchableOpacity
          className="bg-black py-4 px-10 rounded-full w-full"
          onPress={() => router.push('/sign-in')} // Replace with your desired route
        >
          <Text className="text-white text-lg font-bold text-center">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
  },
});

export default Screen3;