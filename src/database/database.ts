import sqlite3 from "sqlite3";
import { open } from "sqlite";

// open a SQLite database
export const initDB = async () => {
  const db = await open({
    filename: "./securedrop.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS files (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      original_name TEXT,
      stored_name TEXT,
      encryption_key TEXT,
      uploaded_at TEXT
    )
  `);

  return db;
};
