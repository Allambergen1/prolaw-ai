import { getChatGPTUser } from "@/app/chatgpt-auth";
import { database, ensurePilotSchema, isAdmin } from "@/db/pilot";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user || !isAdmin(user.userId)) return Response.json({ error: "Forbidden" }, { status: 403 });
  await ensurePilotSchema();
  const students = await database().prepare(`
    SELECT p.user_id,p.full_name,p.email,p.university,p.faculty,p.course,p.group_name,p.created_at,
      COUNT(t.id) AS attempts,
      COALESCE(ROUND(AVG(CASE WHEN t.total_count > 0 THEN t.correct_count * 100.0 / t.total_count END),1),0) AS average_score,
      MAX(t.completed_at) AS last_test
    FROM student_profiles p
    LEFT JOIN test_attempts t ON t.user_id=p.user_id
    GROUP BY p.user_id
    ORDER BY p.created_at DESC
    LIMIT 200
  `).all();
  const totals = await database().prepare(`
    SELECT
      (SELECT COUNT(*) FROM student_profiles WHERE role='student') AS students,
      (SELECT COUNT(*) FROM test_attempts) AS tests,
      (SELECT COUNT(*) FROM case_attempts) AS cases,
      (SELECT COALESCE(ROUND(AVG(correct_count * 100.0 / total_count),1),0) FROM test_attempts) AS average_score
  `).first();
  return Response.json({ totals, students: students.results });
}
