import { env } from "cloudflare:workers";

export type StudentProfile = {
  userId: string;
  email: string;
  fullName: string;
  university: string;
  faculty: string;
  course: string;
  groupName: string;
  role: "student" | "admin";
  createdAt: string;
  updatedAt: string;
};

const ADMIN_USER_IDS = new Set(["fb817fe7-13a0-48cf-8cf2-791cf6188edd"]);

export function isAdmin(userId: string) {
  return ADMIN_USER_IDS.has(userId);
}

export function database() {
  if (!env.DB) throw new Error("D1 binding DB is unavailable");
  return env.DB;
}

export async function ensurePilotSchema() {
  const db = database();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS student_profiles (
      user_id TEXT PRIMARY KEY,
      email TEXT NOT NULL,
      full_name TEXT NOT NULL,
      university TEXT NOT NULL DEFAULT '',
      faculty TEXT NOT NULL DEFAULT '',
      course TEXT NOT NULL DEFAULT '',
      group_name TEXT NOT NULL DEFAULT '',
      role TEXT NOT NULL DEFAULT 'student',
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS pilot_sessions (
      token TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_pilot_sessions_user ON pilot_sessions(user_id);
    CREATE TABLE IF NOT EXISTS test_attempts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      mode TEXT NOT NULL,
      correct_count INTEGER NOT NULL,
      total_count INTEGER NOT NULL,
      duration_seconds INTEGER NOT NULL DEFAULT 0,
      started_at TEXT NOT NULL,
      completed_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_test_attempts_user ON test_attempts(user_id, completed_at DESC);
    CREATE TABLE IF NOT EXISTS case_attempts (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      case_number INTEGER NOT NULL,
      response TEXT NOT NULL,
      completed_at TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS idx_case_attempts_user ON case_attempts(user_id, completed_at DESC);
  `);
}

export function rowToProfile(row: Record<string, unknown>): StudentProfile {
  return {
    userId: String(row.user_id),
    email: String(row.email),
    fullName: String(row.full_name),
    university: String(row.university),
    faculty: String(row.faculty),
    course: String(row.course),
    groupName: String(row.group_name),
    role: row.role === "admin" ? "admin" : "student",
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
  };
}
