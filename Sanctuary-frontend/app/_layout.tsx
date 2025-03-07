import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="login-sign-up" />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="allow-location" />
      </Stack>
  }
