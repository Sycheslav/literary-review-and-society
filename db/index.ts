import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

type DatabaseState = typeof globalThis & {
  literaryReviewSql?: ReturnType<typeof postgres>;
  literaryReviewReady?: Promise<void>;
};

const databaseState = globalThis as DatabaseState;

async function prepareDatabase(client: ReturnType<typeof postgres>) {
  await client.unsafe("CREATE SCHEMA IF NOT EXISTS literary_review");
  await client.unsafe(`
    CREATE TABLE IF NOT EXISTS literary_review.comments (
      id SERIAL PRIMARY KEY,
      target_id TEXT NOT NULL,
      author_name TEXT NOT NULL,
      body TEXT NOT NULL,
      selected_quote TEXT,
      anchor_offset INTEGER,
      anchor_prefix TEXT,
      anchor_suffix TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await client.unsafe(`
    ALTER TABLE literary_review.comments
      ADD COLUMN IF NOT EXISTS anchor_offset INTEGER,
      ADD COLUMN IF NOT EXISTS anchor_prefix TEXT,
      ADD COLUMN IF NOT EXISTS anchor_suffix TEXT
  `);
  await client.unsafe(`
    CREATE INDEX IF NOT EXISTS comments_target_created_idx
    ON literary_review.comments (target_id, created_at, id)
  `);
}

export async function getDb() {
  if (!databaseState.literaryReviewSql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is required to enable shared discussion comments.");
    }

    const client = postgres(connectionString, {
      max: 5,
      idle_timeout: 20,
      connect_timeout: 10,
      prepare: false,
    });
    databaseState.literaryReviewSql = client;
    databaseState.literaryReviewReady = prepareDatabase(client);
  }

  await databaseState.literaryReviewReady;
  return drizzle(databaseState.literaryReviewSql, { schema });
}
