import { cn } from "@/lib/utils";
import { Pressable } from "react-native";
import { Text } from "./text";

interface LinkProps {
  children: React.ReactNode;
  onPress: () => void;
  isSignUp?: boolean;
}

// Reusable Link component
const Link = ({ children, onPress, isSignUp = false }: LinkProps) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        className={cn(
          "text-sm",
          isSignUp ? "text-primary font-medium" : "text-muted-foreground",
          "px-1"
        )}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export { Link };
