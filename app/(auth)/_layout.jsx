//folder wihtin parathesis is a routegoup ir it vcan have oages to whom we can navigate to 
//considered as a separate group beause the screens preesnt here doesn't share the bottom tabs  

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from "expo-router";

const authLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="sign-in" />
          <Stack.Screen name="sign-up" />
          <Stack.Screen name="screen3" />
        </Stack>
  )
}

export default authLayout;

