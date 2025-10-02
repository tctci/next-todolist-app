import { NextResponse } from "next/server";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
export async function GET(
  request: Request,
  props: { params: Promise<{ todoId: string }> }
) {
  const { todoId } = await props.params;
  const data = await sql`
 SELECT * FROM public.todos WHERE id = ${todoId}
 `;


  return NextResponse.json({
    success: true,
    data:data[0],
  });
}
