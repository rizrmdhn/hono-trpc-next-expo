import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .min(1)
    .max(255),
  password: z.string().min(8).max(255),
});

export const registerSchema = z.object({
  username: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .min(1)
    .max(255),
  password: z.string().min(8).max(255),
});
