import { cache } from "react";
import { cookies } from "next/headers";

import { validateSessionToken } from "./utils";

export const getCurrentSession = cache(async () => {
  const awaitedCookies = await cookies();
  const token = awaitedCookies.get("token")?.value;

  if (!token) {
    return { session: null, user: null };
  }

  const result = await validateSessionToken(token);
  return result;
});

export default getCurrentSession;
