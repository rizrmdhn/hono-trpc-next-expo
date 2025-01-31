import { version as trpcVersion } from "@trpc/server/package.json";

import { createTRPCRouter, publicProcedure } from "../trpc";

// Define a safe version of process info
const getProcessInfo = () => {
  try {
    return {
      nodeVersion: process.version || "N/A",
      uptime: process.uptime() || 0,
    };
  } catch {
    return {
      nodeVersion: "N/A",
      uptime: 0,
    };
  }
};

export const statusRouter = createTRPCRouter({
  get: publicProcedure.query(() => {
    const { nodeVersion, uptime } = getProcessInfo();
    return {
      trpcVersion,
      nodeVersion,
      uptime,
      dbVersion: "1.0.0",
    };
  }),

  expo: publicProcedure.query(() => {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
    };
  }),
});
