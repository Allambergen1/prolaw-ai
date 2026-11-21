import { getCurrentUser } from "@/app/current-user";
import { database, ensurePilotSchema } from "@/db/pilot";

export async function GET() {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Authentication required" }, { status: 401 });
  await ensurePilotSchema();
  const tests = await database().prepare("SELECT * FROM test_attempts WHERE user_id = ? ORDER BY completed_at DESC LIMIT 30").bind(user.userId).all();
  const cases = await database().prepare("SELECT case_number, completed_at FROM case_attempts WHERE user_id = ? ORDER BY completed_at DESC").bind(user.userId).all();
  return Response.json({ tests: tests.results, cases: cases.results });
}

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Authentication required" }, { status: 401 });
  const body = await request.json() as Record<string, unknown>;
  const mode = String(body.mode ?? "");
  const correct = Number(body.correct);
  const total = Number(body.total);
  const duration = Math.max(0, Math.round(Number(body.durationSeconds ?? 0)));
  if (!["general", "special", "mixed"].includes(mode) || !Number.isInteger(correct) || !Number.isInteger(total) || total < 1 || total > 50 || correct < 0 || correct > total) {
    return Response.json({ error: "Invalid attempt" }, { status: 400 });
  }
  await ensurePilotSchema();
  const completedAt = new Date().toISOString();
  const startedAt = String(body.startedAt ?? completedAt);
  const id = crypto.randomUUID();
  await database().prepare("INSERT INTO test_attempts VALUES (?,?,?,?,?,?,?,?)")
    .bind(id, user.userId, mode, correct, total, duration, startedAt, completedAt).run();
  return Response.json({ id, completedAt });
}
