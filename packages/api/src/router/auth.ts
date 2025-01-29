import type { TRPCRouterRecord } from "@trpc/server";
import { verify } from "@node-rs/argon2";
import { TRPCError } from "@trpc/server";

import { encrypt } from "@rizrmdhn/auth";
import { getUserByUsername } from "@rizrmdhn/queries/users.queries";
import { loginSchema } from "@rizrmdhn/validators/auth.schema";

import { protectedProcedure, publicProcedure } from "../trpc";

export const authRouter: TRPCRouterRecord = {
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

  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
};
