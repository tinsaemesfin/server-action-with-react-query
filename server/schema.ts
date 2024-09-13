import { decimal, pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  createdDate: timestamp("createdDate").$defaultFn(() => new Date()).notNull(),
  updatedDate: timestamp("updatedDate").$defaultFn(() => new Date()).notNull(),
});