import { statusRouter } from "./router/status";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  status: statusRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
