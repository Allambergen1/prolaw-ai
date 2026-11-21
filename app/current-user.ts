import { cookies } from "next/headers";
import { getChatGPTUser } from "@/app/chatgpt-auth";
import { database, ensurePilotSchema } from "@/db/pilot";

export const PILOT_SESSION_COOKIE = "prolaw_pilot_session";

export type CurrentUser = {
  userId: string;
  email: string;
  fullName: string;
  source: "chatgpt" | "pilot";
};

export async function getCurrentUser(): Promise<CurrentUser | null> {
  const chatGPTUser = await getChatGPTUser();
  if (chatGPTUser) {
    return {
      userId: chatGPTUser.userId,
      email: chatGPTUser.email,
      fullName: chatGPTUser.fullName ?? chatGPTUser.displayName ?? "Student",
      source: "chatgpt",
    };
  }

  const token = (await cookies()).get(PILOT_SESSION_COOKIE)?.value;
  if (!token) return null;
  await ensurePilotSchema();
  const row = await database().prepare(`
    SELECT p.user_id, p.email, p.full_name
    FROM pilot_sessions s
    JOIN student_profiles p ON p.user_id = s.user_id
    WHERE s.token = ?
  `).bind(token).first<Record<string, unknown>>();
  if (!row) return null;
  return {
    userId: String(row.user_id),
    email: String(row.email),
    fullName: String(row.full_name),
    source: "pilot",
  };
}
