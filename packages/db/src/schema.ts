import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  timestamp,
  unique,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { v7 as uuidv7 } from "uuid";

export const createTable = pgTableCreator((name) => `${name}`);

export const users = createTable(
  "users",
  {
    id: uuid("id")
      .primaryKey()
      .notNull()
      .$default(() => uuidv7()),
    username: varchar("username", { length: 50 }).notNull(),
    password: varchar("password", { length: 150 }).notNull(),
    createdAt: timestamp("created_at", {
      withTimezone: true,
      mode: "string",
    })
      .$default(() => sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", {
      withTimezone: true,
      mode: "string",
    }),
  },
  (table) => [
    unique("username_unique").on(table.username),
    index("username_idx").using("btree", table.username),
    index("user_idx").using("btree", table.id),
  ],
);
