import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SERVER_PORT: z.number().default(3005),
    POSTGRES_URL: z.string().url(),
  },

  client: {},

  runtimeEnv: {
    SERVER_PORT: Number(process.env.SERVER_PORT),
    POSTGRES_URL: process.env.POSTGRES_URL,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
