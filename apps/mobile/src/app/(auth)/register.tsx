import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { View } from "react-native";
import useRegister from "@/hooks/useRegister";
import LoaderSpinner from "@/components/loader-spinner";

export default function RegisterScreen() {
  const { username, setUsername, password, setPassword, register, isLoading } =
    useRegister();

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Card className="w-full max-w-sm rounded-xl bg-background">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Register
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 gap-4">
          <Input
            placeholder="Username"
            keyboardType="default"
            autoCapitalize="none"
            className="bg-background"
            value={username}
            onChangeText={setUsername}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            className="bg-background"
            value={password}
            onChangeText={setPassword}
          />
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            className="flex-row items-center w-full gap-2"
            variant="default"
            onPress={() => register()}
            disabled={isLoading}
          >
            {isLoading && <LoaderSpinner />}
            <Text className="text-primary-foreground font-medium">Sign Up</Text>
          </Button>

          <Text>Already have an account?</Text>
          <Link href="/login">Sign In</Link>
        </CardFooter>
      </Card>
    </View>
  );
}
