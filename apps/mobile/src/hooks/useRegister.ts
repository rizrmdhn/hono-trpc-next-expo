import { api } from "@/utils/api";
import { globalErrorToast, globalSuccessToast } from "@/utils/toast";
import { useRouter } from "expo-router";
import { useState } from "react";

function useRegister() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerMutation = api.auth.register.useMutation({
    onSuccess: () => {
      globalSuccessToast("Registered successfully");

      router.replace("/(auth)/login");
    },
    onError: (error) => {
      globalErrorToast(error.message);
    },
  });

  const register = async () => {
    if (!username || !password) {
      globalErrorToast("Username and password are required");
      return;
    }

    await registerMutation.mutateAsync({ username, password });
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    register,
    isLoading: registerMutation.isPending,
  };
}

export default useRegister;
