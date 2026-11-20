import { getChatGPTUser } from "@/app/chatgpt-auth";
import { database, ensurePilotSchema, isAdmin, rowToProfile } from "@/db/pilot";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ authenticated: false }, { status: 401 });
  await ensurePilotSchema();
  const row = await database().prepare("SELECT * FROM student_profiles WHERE user_id = ?").bind(user.userId).first();
  return Response.json({
    authenticated: true,
    user: { userId: user.userId, email: user.email, fullName: user.fullName ?? user.displayName },
    profile: row ? rowToProfile(row as Record<string, unknown>) : null,
    isAdmin: isAdmin(user.userId),
  });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Authentication required" }, { status: 401 });
  const body = await request.json() as Record<string, unknown>;
  const fullName = String(body.fullName ?? user.fullName ?? user.displayName).trim().slice(0, 120);
  const university = String(body.university ?? "").trim().slice(0, 160);
  const faculty = String(body.faculty ?? "").trim().slice(0, 160);
  const course = String(body.course ?? "").trim().slice(0, 40);
  const groupName = String(body.groupName ?? "").trim().slice(0, 80);
  if (!fullName || !university || !faculty || !course || !groupName) {
    return Response.json({ error: "All profile fields are required" }, { status: 400 });
  }
  await ensurePilotSchema();
  const now = new Date().toISOString();
  const role = isAdmin(user.userId) ? "admin" : "student";
  await database().prepare(`
    INSERT INTO student_profiles (user_id,email,full_name,university,faculty,course,group_name,role,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?)
    ON CONFLICT(user_id) DO UPDATE SET email=excluded.email,full_name=excluded.full_name,
      university=excluded.university,faculty=excluded.faculty,course=excluded.course,
      group_name=excluded.group_name,role=excluded.role,updated_at=excluded.updated_at
  `).bind(user.userId, user.email, fullName, university, faculty, course, groupName, role, now, now).run();
  const row = await database().prepare("SELECT * FROM student_profiles WHERE user_id = ?").bind(user.userId).first();
  return Response.json({ profile: rowToProfile(row as Record<string, unknown>) });
}
