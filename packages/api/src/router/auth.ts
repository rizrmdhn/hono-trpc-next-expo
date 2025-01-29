import { hash, verify } from "@node-rs/argon2";
import { TRPCError } from "@trpc/server";

import { encrypt } from "@rizrmdhn/auth";
import { createUser, getUserByUsername } from "@rizrmdhn/queries/users.queries";
import { loginSchema, registerSchema } from "@rizrmdhn/validators/auth.schema";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const authRouter = createTRPCRouter({
  login: publicProcedure
    .input(loginSchema)
    .mutation(async ({ input: { username, password } }) => {
      const user = await getUserByUsername(username);

      if (!user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not found",
        });
      }

      const isValid = await verify(user.password, password);

      if (!isValid) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Password is incorrect",
        });
      }

      // Generate JWT token
      const token = await encrypt({
        id: user.id,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        iat: Math.floor(Date.now() / 1000),
        jti: user.id,
      });

      return {
        token,
        user,
      };
    }),

  register: publicProcedure
    .input(registerSchema)
    .mutation(async ({ input: { username, password } }) => {
      const user = await getUserByUsername(username);

      if (user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Username already exists",
        });
      }

      const hashedPassword = await hash(password);

      const createdUser = await createUser(username, hashedPassword);

      return createdUser;
    }),

  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});
