import { Stack } from "expo-router";

export default function WelcomeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="screen1" />
      <Stack.Screen name="screen2" />
      <Stack.Screen name="screen3" />
    </Stack>
  );
}
