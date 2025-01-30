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
import { Link } from "@/components/ui/link";

export default function HomeScreen() {
  return (
    <Card className="w-full max-w-sm rounded-xl bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 gap-4">
        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          className="bg-background"
        />
        <Input
          placeholder="Password"
          secureTextEntry
          className="bg-background"
        />
      </CardContent>

      <CardFooter className="flex-col gap-2">
        <Button
          className="w-full"
          variant="default"
          onPress={() => console.log("Sign In pressed")}
        >
          <Text className="text-primary-foreground font-medium">Sign In</Text>
        </Button>

        <Link onPress={() => {}}>Don't have an account?</Link>
        <Link isSignUp onPress={() => console.log("Sign Up pressed")}>
          Sign Up
        </Link>
      </CardFooter>
    </Card>
  );
}
