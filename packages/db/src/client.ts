import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

export const db = drizzle({
  schema: {
    ...schema,
  },
  casing: "snake_case",
});
