import { NextResponse } from "next/server";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
export async function GET(_request: Request, props: { params: Promise<{ planId: string }> }) {
  const params = await props.params;
  let data: postgres.RowList<postgres.Row[]> | never[] = [];
  const { planId } = params;
  data = await sql`
        SELECT * FROM public.todos WHERE plan_id = ${planId}
       `;
  return NextResponse.json({ data });
}
