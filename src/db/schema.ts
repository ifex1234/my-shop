import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const cart = pgTable("Cart", {
  id: serial("id").primaryKey(),
  product_name: text("product_name").notNull(),
  product_price: integer("product_price").notNull(),
  product_quantity: text("product_quantity").notNull().unique(),
});

export const postsTable = pgTable("posts_table", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => cart.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof cart.$inferInsert;
export type SelectUser = typeof cart.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
