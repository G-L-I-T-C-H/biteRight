import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const SignInScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#FFA001]">
      {/* Top Header */}
      <View className="flex-row items-center justify-between p-4 my-7">
        <TouchableOpacity onPress={() => router.back()}>
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/sign-up')}>
          <Text className="text-black font-medium">Register</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View className="bg-white rounded-t-3xl flex-1 p-6">
        {/* Title and Description */}
        <Text className="text-3xl font-bold text-black mb-2">Sign In</Text>
        <Text className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor</Text>

        {/* Form Inputs */}
        <TextInput
          placeholder="Username"
          className="bg-gray-100 p-4 rounded-lg mb-4"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          className="bg-gray-100 p-4 rounded-lg mb-2"
        />
        <TouchableOpacity onPress={() => {}}>
          <Text className="text-blue-500 text-right mb-6">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Sign In Button */}
        <TouchableOpacity className="bg-black p-4 rounded-lg mb-6" onPress={() => router.push('/home')}>
          <Text className="text-white text-center font-bold">Sign In</Text>
        </TouchableOpacity>

        {/* Social Buttons */}
        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg flex-row items-center mb-4">
          <Image
            source={require('../../assets/images/goog.png')} 
            className="w-6 h-6 mr-4"
            style={styles.image}
          />
          <Text className="text-black font-medium flex-1">Continue with Google</Text>
          <Entypo name="chevron-right" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity className="bg-gray-100 p-4 rounded-lg flex-row items-center">
          <Image
            source={require('../../assets/images/face.jpg')}
            className="w-6 h-6 mr-4"
            style={styles.image}
          />
          <Text className="text-black font-medium flex-1">Continue with Facebook</Text>
          <Entypo name="chevron-right" size={20} color="black" />
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

export default SignInScreen;