import { index, pgSchema, serial, text, timestamp } from "drizzle-orm/pg-core";

const literatureReview = pgSchema("literary_review");

export const comments = literatureReview.table(
  "comments",
  {
    id: serial("id").primaryKey(),
    targetId: text("target_id").notNull(),
    authorName: text("author_name").notNull(),
    body: text("body").notNull(),
    selectedQuote: text("selected_quote"),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .notNull()
      .defaultNow(),
  },
  (table) => [
    index("comments_target_created_idx").on(
      table.targetId,
      table.createdAt,
      table.id,
    ),
  ],
);
