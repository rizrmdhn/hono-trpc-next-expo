import { api } from "./api";

export const useUser = () => {
  const { data: session, isSuccess } = api.auth.me.useQuery();
  return {
    session,
    isSuccess,
    isAuthenticated: !!session,
  };
};
