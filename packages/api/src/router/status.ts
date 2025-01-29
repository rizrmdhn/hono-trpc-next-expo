import type { TRPCRouterRecord } from "@trpc/server";

import { publicProcedure } from "../trpc";

export const statusRouter = {
  health: publicProcedure.query(() => {
    return { status: "OK" };
  }),
} satisfies TRPCRouterRecord;
