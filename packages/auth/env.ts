import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    JWT_SECRET_KEY: z.string(),
  },

  client: {},

  runtimeEnv: {
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },

  emptyStringAsUndefined: true,
});
