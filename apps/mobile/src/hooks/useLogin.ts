import { api } from "@/utils/api";
import { setToken } from "@/utils/session-store";
import { globalErrorToast, globalSuccessToast } from "@/utils/toast";
import { useRouter } from "expo-router";
import { useState } from "react";

function useLogin() {
  const router = useRouter();
  const utils = api.useUtils();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = api.auth.login.useMutation({
    onSuccess: async (data) => {
      setToken(data.token);

      await utils.auth.me.invalidate();
      globalSuccessToast("Logged in successfully");
      router.replace("/(core)");
    },
    onError: (error) => {
      globalErrorToast(error.message);
    },
  });

  const login = async () => {
    if (!username || !password) {
      globalErrorToast("Username and password are required");
      return;
    }

    await loginMutation.mutateAsync({ username, password });
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    login,
    isLoading: loginMutation.isPending,
  };
}

export default useLogin;
