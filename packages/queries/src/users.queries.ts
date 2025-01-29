import { eq } from "drizzle-orm";

import { db } from "@rizrmdhn/db/client";
import { users } from "@rizrmdhn/db/schema";

export const getUserByUsername = async (username: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  return user;
};
