import mysql from "mysql2/promise";

let pool = null;

export function isDbConfigured() {
  return Boolean(
    process.env.DB_HOST &&
      process.env.DB_USER &&
      process.env.DB_NAME,
  );
}

export function getPool() {
  if (!isDbConfigured()) {
    throw new Error("Database is not configured. Set DB_* environment variables.");
  }

  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      timezone: "+00:00",
    });
  }

  return pool;
}

export async function pingDb() {
  const db = getPool();
  await db.query("SELECT 1");
}
