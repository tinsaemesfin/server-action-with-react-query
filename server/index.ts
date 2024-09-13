import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from "@/server/schema";

const client = new Client({
  connectionString: process.env.POSTGRES_DATABASE_URL as string,

},);


await client.connect();
const db = drizzle(client,{schema ,logger:true});
export {db};