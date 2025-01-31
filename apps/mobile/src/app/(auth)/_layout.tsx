import { useUser } from "@/utils/auth";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function AuthLayout() {
  const { session, isSuccess } = useUser();

  useEffect(() => {
    if (!isSuccess) {
      // should show the splash screen
      void SplashScreen.hideAsync();
    }
  }, [isSuccess]);

  if (isSuccess && session) {
    return <Redirect href="/(core)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
    </Stack>
  );
}
