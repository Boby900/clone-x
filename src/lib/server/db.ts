import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import { env } from "../../env/server";
import * as schema from "./schema";
config({ path: ".env.local" });
const sql = neon(env.DATABASE_URL);
export const db = drizzle(sql, {schema});