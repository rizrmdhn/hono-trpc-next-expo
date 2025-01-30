import React from "react";
import { View } from "react-native";
import { Slot } from "expo-router";

export default function TabLayout() {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Slot />
    </View>
  );
}
