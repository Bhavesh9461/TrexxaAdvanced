import 'dotenv/config';
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';

import * as schema from "@/db/schema"

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("Missing DATABASE_URL.");
}

const client = postgres(databaseUrl, {
  ssl: 'require',
});

export const db = drizzle(client, {schema});