import { authRouter } from "./router/auth";
import { statusRouter } from "./router/status";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  health: statusRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
