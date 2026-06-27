import mysql from "mysql2/promise";

let pool = null;
let activeHost = null;

function env(name, fallbackNames = []) {
  if (process.env[name]) return process.env[name];
  for (const key of fallbackNames) {
    if (process.env[key]) return process.env[key];
  }
  return undefined;
}

export function getDbConfig() {
  const databaseUrl = env("DATABASE_URL", ["MYSQL_URL"]);
  if (databaseUrl) {
    return { databaseUrl };
  }

  return {
    host: env("DB_HOST", ["MYSQL_HOST", "MYSQLHOST"]),
    port: Number(env("DB_PORT", ["MYSQL_PORT"]) || 3306),
    user: env("DB_USER", ["MYSQL_USER", "MYSQLUSER"]),
    password: env("DB_PASSWORD", ["MYSQL_PASSWORD", "MYSQLPASSWORD"]) || "",
    database: env("DB_NAME", ["MYSQL_DATABASE", "MYSQLDATABASE"]),
    socketPath: env("DB_SOCKET", ["MYSQL_SOCKET"]),
  };
}

export function isDbConfigured() {
  const config = getDbConfig();
  if (config.databaseUrl) return true;
  return Boolean(config.user && config.database && (config.host || config.socketPath));
}

function buildPoolOptions(config, hostOverride) {
  if (config.databaseUrl) {
    return config.databaseUrl;
  }

  if (config.socketPath) {
    return {
      socketPath: config.socketPath,
      user: config.user,
      password: config.password,
      database: config.database,
      waitForConnections: true,
      connectionLimit: 5,
      connectTimeout: 10000,
      timezone: "+00:00",
    };
  }

  const host = hostOverride || config.host;
  return {
    host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
    waitForConnections: true,
    connectionLimit: 5,
    connectTimeout: 10000,
    timezone: "+00:00",
  };
}

function hostsToTry(config) {
  if (config.databaseUrl || config.socketPath) return [null];

  const hosts = [];
  const primary = (config.host || "localhost").trim();
  if (primary) hosts.push(primary);

  if (primary === "localhost" && !hosts.includes("127.0.0.1")) {
    hosts.push("127.0.0.1");
  }
  if (primary === "127.0.0.1" && !hosts.includes("localhost")) {
    hosts.push("localhost");
  }

  return hosts;
}

export function getPool() {
  if (!isDbConfigured()) {
    throw new Error("Database is not configured. Set DB_* environment variables.");
  }

  if (!pool) {
    const config = getDbConfig();
    pool = mysql.createPool(buildPoolOptions(config, activeHost));
  }

  return pool;
}

export function resetPool() {
  if (pool) {
    pool.end().catch(() => {});
    pool = null;
    activeHost = null;
  }
}

function hintForError(error) {
  const code = error?.code || "";
  const errno = error?.errno;

  if (code === "ER_ACCESS_DENIED_ERROR" || errno === 1045) {
    return "Access denied. In hPanel → Databases, assign the MySQL user to the database, reset the password if needed, and update DB_PASSWORD.";
  }
  if (code === "ER_BAD_DB_ERROR" || errno === 1049) {
    return "Database not found. DB_NAME must match the full database name from hPanel (including u123456_ prefix).";
  }
  if (code === "ECONNREFUSED" || code === "ETIMEDOUT" || code === "ENOTFOUND") {
    return "Cannot reach MySQL. Try DB_HOST=127.0.0.1, or the hostname from hPanel → Databases → your database.";
  }
  if (code === "ER_NO_SUCH_TABLE" || errno === 1146) {
    return "Connected but leads table is missing. Run database/schema.sql in phpMyAdmin.";
  }

  return "Check DB_HOST, DB_USER, DB_PASSWORD, and DB_NAME, then Restart the Node app in hPanel.";
}

async function queryWithTemporaryPool(config, hostOverride) {
  const options = buildPoolOptions(config, hostOverride);
  const temporaryPool =
    typeof options === "string" ? mysql.createPool(options) : mysql.createPool(options);

  try {
    await temporaryPool.query("SELECT 1");
    return temporaryPool;
  } catch (error) {
    await temporaryPool.end().catch(() => {});
    throw error;
  }
}

export async function pingDb() {
  const config = getDbConfig();

  if (!isDbConfigured()) {
    return { ok: false, hint: "Database environment variables are missing." };
  }

  resetPool();

  const hosts = hostsToTry(config);
  let lastError = null;

  for (const host of hosts) {
    try {
      pool = await queryWithTemporaryPool(config, host);
      activeHost = host;
      console.info("[db] connected via", host || config.socketPath || "DATABASE_URL");
      return { ok: true, host: host || config.host };
    } catch (error) {
      lastError = error;
      console.error("[db] connection failed:", host || config.host, error.code || error.errno, error.message);
    }
  }

  resetPool();
  return {
    ok: false,
    code: lastError?.code,
    hint: hintForError(lastError),
  };
}
