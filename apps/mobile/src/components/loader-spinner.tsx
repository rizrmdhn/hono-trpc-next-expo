import React from "react";
import { Loader2 } from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  useSharedValue,
  Easing,
} from "react-native-reanimated";
import { cn } from "@/lib/utils";

const AnimatedLoader2 = Animated.createAnimatedComponent(Loader2);

interface LoaderSpinnerProps {
  className?: string;
}

const LoaderSpinner = ({ className }: LoaderSpinnerProps) => {
  // Create a shared value for rotation
  const rotation = useSharedValue(0);

  // Start the rotation animation when component mounts
  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1, // -1 means infinite repetition
      false // false means don't reverse the animation
    );
  }, [rotation]);

  // Create animated style for rotation transform
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  return (
    <AnimatedLoader2
      size={16}
      color="white"
      style={animatedStyle}
      className={cn("mr-2 h-4 w-4", className)}
    />
  );
};

export default LoaderSpinner;
