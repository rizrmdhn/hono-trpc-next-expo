import React from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import useLogout from "@/hooks/useLogout";
import LoaderSpinner from "@/components/loader-spinner";

export default function DashboardScreen() {
  const { logout, isLoading } = useLogout();
  return (
    <SafeAreaView className="bg-background w-full h-full">
      <ScrollView className="flex-1 bg-gray-100">
        <View className="p-4">
          {/* Header Section */}
          <View className="mb-4 p-4 bg-white rounded-lg flex-row items-center justify-between">
            <Text className="text-2xl font-bold">Dashboard</Text>
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              className="w-10 h-10 rounded-full"
            />
          </View>

          {/* Stats Cards */}
          <View className="flex-row justify-between">
            <View className="w-[48%] p-4 mb-4 bg-white rounded-lg">
              <Text className="text-gray-600">Total Users</Text>
              <Text className="text-2xl font-bold">1,234</Text>
            </View>
            <View className="w-[48%] p-4 mb-4 bg-white rounded-lg">
              <Text className="text-gray-600">Revenue</Text>
              <Text className="text-2xl font-bold">$5,678</Text>
            </View>
          </View>

          {/* Recent Activity */}
          <View className="p-4 bg-white rounded-lg">
            <Text className="text-xl font-bold mb-4">Recent Activity</Text>
            {[1, 2, 3].map((item) => (
              <View key={item} className="py-2 border-b border-gray-200">
                <Text className="font-medium">Activity {item}</Text>
                <Text className="text-gray-600 text-sm">2 hours ago</Text>
              </View>
            ))}
          </View>

          {/* Logout Button */}
          <View className="p-4 mt-4 bg-white rounded-lg">
            <Button
              className="flex-row items-center w-full gap-2"
              onPress={logout}
            >
              {isLoading && <LoaderSpinner />}
              <Text className=" font-bold">Logout</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
