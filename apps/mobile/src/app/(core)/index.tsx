import React from "react";
import { Image, View } from "react-native";

import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import useLogout from "@/hooks/useLogout";
import LoaderSpinner from "@/components/loader-spinner";
import { api } from "@/utils/api";

export default function DashboardScreen() {
  const { logout, isLoading } = useLogout();

  const { data } = api.health.get.useQuery();

  return (
    <View className="flex-1 bg-gray-100 p-4">
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

      {/* Server Status */}
      <View className="p-4 bg-white rounded-lg">
        <Text className="text-xl font-bold mb-4">Server Status</Text>
        <View className="py-2 border-b border-gray-200">
          <Text className="font-medium">Status </Text>
          <Text className="text-gray-600 text-sm">{data?.status ?? ""}</Text>
        </View>
        <View className="py-2 border-b border-gray-200">
          <Text className="font-medium">Node.js </Text>
          <Text className="text-gray-600 text-sm">
            {data?.nodeVersion ?? ""}
          </Text>
        </View>
        <View className="py-2 border-b border-gray-200">
          <Text className="font-medium">TRPC </Text>
          <Text className="text-gray-600 text-sm">
            {data?.trpcVersion ?? ""}
          </Text>
        </View>
        <View className="py-2 border-b border-gray-200">
          <Text className="font-medium">Database </Text>
          <Text className="text-gray-600 text-sm">{data?.dbVersion ?? ""}</Text>
        </View>
        <View className="py-2 border-b border-gray-200">
          <Text className="font-medium">Uptime </Text>
          <Text className="text-gray-600 text-sm">{data?.uptime ?? ""}</Text>
        </View>
      </View>

      {/* Logout Button */}
      <View className="p-4 mt-4 bg-white rounded-lg">
        <Button className="flex-row items-center w-full gap-2" onPress={logout}>
          {isLoading && <LoaderSpinner />}
          <Text className=" font-bold">Logout</Text>
        </Button>
      </View>
    </View>
  );
}
