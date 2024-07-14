import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { db } from "../../db/db";
import { sessionTable } from "../../db/schema";
import { userTable } from "../../db/schema";






export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);