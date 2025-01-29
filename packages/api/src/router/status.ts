import { version as trpcVersion } from "@trpc/server/package.json";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const statusRouter = createTRPCRouter({
  get: publicProcedure.query(() => {
    return {
      trpcVersion,
      nodeVersion: process.version,
      uptime: process.uptime(),
      dbVersion: "1.0.0",
    };
  }),
});
