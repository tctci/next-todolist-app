import { NextResponse } from "next/server";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
export async function POST(
  request: Request,
  props: { params: Promise<{ todoId: string }> }
) {
  const { todoId } = await props.params;
  const body = await request.json();
  console.log(body);
  
  const res = await sql`
  UPDATE todos SET description = ${body}, updated_at = CURRENT_TIMESTAMP WHERE id = ${todoId}
  `;

  return NextResponse.json(res);
}
