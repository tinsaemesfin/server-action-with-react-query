import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres, { Sql } from "postgres";
import * as schema from "@/server/schema";

let migrationClient: Sql | undefined;
let db: PostgresJsDatabase<typeof schema> | undefined;

// for migrations

// for queries
if (process.env.NODE_ENV === "development") {
  // Migration
  if (!migrationClient) {
    migrationClient = postgres(process.env.POSTGRES_DATABASE_URL as string, {
      max: 1,
      onnotice: () => {},
    });
  }
  migrate(drizzle(migrationClient), {
    migrationsFolder: "./server/migrations",
  });

  // Query
  if (!db) {
    db = drizzle(
      postgres(process.env.POSTGRES_DATABASE_URL as string, {
        onnotice: () => {},
      }),
      { schema, logger: true }
    );
  }
} else {
  // Migration
  const migrationClient = postgres(
    process.env.POSTGRES_DATABASE_URL as string,
    {
      max: 1,
      onnotice: () => {},
    }
    
  );
  migrate(drizzle(migrationClient), {
    migrationsFolder: "./server/migrations",
  });

  // Query
  const queryClient = postgres(process.env.POSTGRES_DATABASE_URL as string);
  db = drizzle(queryClient, { schema, logger: true });
}

export { db };
