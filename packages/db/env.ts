import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    POSTGRES_URL: z.string(),
  },

  client: {},

  runtimeEnv: {
    POSTGRES_URL: process.env.POSTGRES_URL,
  },

  emptyStringAsUndefined: true,
});
