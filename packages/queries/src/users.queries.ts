import { TRPCError } from "@trpc/server";

import { eq } from "@rizrmdhn/db";
import { db } from "@rizrmdhn/db/client";
import { users } from "@rizrmdhn/db/schema";

export const getUserByUsername = async (username: string) => {
  const user = await db.query.users.findFirst({
    where: eq(users.username, username),
  });

  return user;
};

export const createUser = async (username: string, password: string) => {
  const [data] = await db
    .insert(users)
    .values({
      username,
      password,
    })
    .returning()
    .execute();

  if (!data) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to create user",
    });
  }

  return data;
};
