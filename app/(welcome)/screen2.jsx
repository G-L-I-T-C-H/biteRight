import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native'; 

const Screen2 = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white px-6 justify-between">
      {/* Top Text Section */}
      <View className="mt-20">
        <Text className="text-4xl font-bold text-black">Personalized</Text>
        <Text className="text-4xl font-bold text-black">healthy plan.</Text>
      </View>

      {/* Image Section */}
      <View className="items-center">
        <Image
          source={require('../../assets/images/logo.png')} 
          className="w-72 h-72"
          style={styles.image} 
        />
      </View>

      {/* Bottom Button Section */}
      <View className="mb-10 items-center">
        <TouchableOpacity
          className="bg-black py-4 px-10 rounded-full w-full"
          onPress={() => router.push('/(welcome)/screen3')} 
        >
          <Text className="text-white text-lg font-bold text-center">Let's start</Text>
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

export default Screen2;