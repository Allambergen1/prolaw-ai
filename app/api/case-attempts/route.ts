import { getCurrentUser } from "@/app/current-user";
import { database, ensurePilotSchema } from "@/db/pilot";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  if (!user) return Response.json({ error: "Authentication required" }, { status: 401 });
  const body = await request.json() as Record<string, unknown>;
  const caseNumber = Number(body.caseNumber);
  const response = String(body.response ?? "").trim().slice(0, 10000);
  if (!Number.isInteger(caseNumber) || caseNumber < 1 || caseNumber > 10 || !response) {
    return Response.json({ error: "Invalid case response" }, { status: 400 });
  }
  await ensurePilotSchema();
  const id = crypto.randomUUID();
  const completedAt = new Date().toISOString();
  await database().prepare("INSERT INTO case_attempts VALUES (?,?,?,?,?)")
    .bind(id, user.userId, caseNumber, response, completedAt).run();
  return Response.json({ id, completedAt });
}
