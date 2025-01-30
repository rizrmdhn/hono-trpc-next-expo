import { api } from "./api";

export const useUser = () => {
  const { data: session } = api.auth.me.useQuery();
  return session?.user ?? null;
};
