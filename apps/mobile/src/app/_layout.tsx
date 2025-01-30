import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { TRPCProvider } from "@/utils/api";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { Toaster } from "sonner-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <TRPCProvider>
      <GestureHandlerRootView>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(core)" options={{ headerShown: false }} />
        </Stack>
        <Toaster position="bottom-center" richColors />
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </TRPCProvider>
  );
}
