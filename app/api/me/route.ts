import { cookies } from "next/headers";
import { getCurrentUser, PILOT_SESSION_COOKIE } from "@/app/current-user";
import { database, ensurePilotSchema, isAdmin, rowToProfile } from "@/db/pilot";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ authenticated: false }, { status: 401 });
  await ensurePilotSchema();
  const row = await database().prepare("SELECT * FROM student_profiles WHERE user_id = ?").bind(user.userId).first();
  return Response.json({
    authenticated: true,
    user: { userId: user.userId, email: user.email, fullName: user.fullName },
    profile: row ? rowToProfile(row as Record<string, unknown>) : null,
    isAdmin: isAdmin(user.userId),
  });
}

export async function POST(request: Request) {
  const body = await request.json() as Record<string, unknown>;
  let user = await getCurrentUser();
  const fullName = String(body.fullName ?? user?.fullName ?? "").trim().slice(0, 120);
  const email = String(body.email ?? user?.email ?? "").trim().toLowerCase().slice(0, 160);
  const university = String(body.university ?? "").trim().slice(0, 160);
  const faculty = String(body.faculty ?? "").trim().slice(0, 160);
  const course = String(body.course ?? "").trim().slice(0, 40);
  const groupName = String(body.groupName ?? "").trim().slice(0, 80);
  if (!fullName || !email || !email.includes("@") || !university || !faculty || !course || !groupName) {
    return Response.json({ error: "All profile fields are required" }, { status: 400 });
  }
  await ensurePilotSchema();
  const now = new Date().toISOString();
  let pilotToken: string | null = null;
  if (!user) {
    const userId = `pilot:${crypto.randomUUID()}`;
    pilotToken = crypto.randomUUID();
    user = { userId, email, fullName, source: "pilot" };
  }
  const role = isAdmin(user.userId) ? "admin" : "student";
  await database().prepare(`
    INSERT INTO student_profiles (user_id,email,full_name,university,faculty,course,group_name,role,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?)
    ON CONFLICT(user_id) DO UPDATE SET email=excluded.email,full_name=excluded.full_name,
      university=excluded.university,faculty=excluded.faculty,course=excluded.course,
      group_name=excluded.group_name,role=excluded.role,updated_at=excluded.updated_at
  `).bind(user.userId, email, fullName, university, faculty, course, groupName, role, now, now).run();
  if (pilotToken) {
    await database().prepare("INSERT INTO pilot_sessions (token,user_id,created_at) VALUES (?,?,?)")
      .bind(pilotToken, user.userId, now).run();
    (await cookies()).set(PILOT_SESSION_COOKIE, pilotToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 90,
    });
  }
  const row = await database().prepare("SELECT * FROM student_profiles WHERE user_id = ?").bind(user.userId).first();
  return Response.json({ profile: rowToProfile(row as Record<string, unknown>), authenticated: true });
}
