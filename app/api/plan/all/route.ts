import { NextResponse } from "next/server";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
export async function GET() {
  const data = await sql`
   SELECT * FROM public.plan
  `
  return NextResponse.json({data});
}
