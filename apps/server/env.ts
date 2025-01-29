import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SERVER_PORT: z.number().default(3005),
    NODE_ENV: z.enum(["development", "test", "production"]),
    POSTGRES_URL: z.string().url(),
  },

  client: {},

  runtimeEnv: {
    SERVER_PORT: Number(process.env.SERVER_PORT),
    NODE_ENV: process.env.NODE_ENV,
    POSTGRES_URL: process.env.POSTGRES_URL,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
