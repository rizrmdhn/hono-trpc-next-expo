import { api } from "@/utils/api";
import { deleteToken } from "@/utils/session-store";
import { globalErrorToast, globalSuccessToast } from "@/utils/toast";
import { tryCatch } from "@/utils/try-catch";
import { useRouter } from "expo-router";
import { useState } from "react";

function useLogout() {
  const router = useRouter();
  const utils = api.useUtils();

  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);
    const { error } = await tryCatch(async () => await deleteToken());

    if (error) {
      if (error instanceof Error) {
        return globalErrorToast(error.message);
      } else {
        return globalErrorToast("An error occurred");
      }
    }

    await utils.auth.me.invalidate();
    setIsLoading(false);
    globalSuccessToast("Logged out successfully");
    router.replace("/(auth)");
  };

  return {
    logout,
    isLoading,
  };
}

export default useLogout;
