import { serve } from "@hono/node-server";
import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { cors } from "hono/cors";

import { appRouter } from "@rizrmdhn/api";
import { env } from "../env.js";

const app = new Hono();

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

const port = env.SERVER_PORT;
console.log(`Server is running on http://localhost:${port}`);

const server = serve({
  fetch: app.fetch,
  port,
});

// Graceful shutdown handling
const shutdown = async () => {
  console.log("\nReceived shutdown signal. Closing server...");

  try {
    server.close();
    console.log("Server closed successfully");
    process.exit(0);
  } catch (err) {
    console.error("Error during shutdown:", err);
    process.exit(1);
  }
};

// Listen for interrupt signals
process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
