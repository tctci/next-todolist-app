import { NextResponse } from "next/server";
import postgres from "postgres";
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
export async function GET(request: Request, props: { params: Promise<{ catalogueId: string }> }) {
  const params = await props.params;
  let data: postgres.RowList<postgres.Row[]> | never[] = [];
  const { catalogueId } = params;
  const date = new Date();
  const nowDate = date.toISOString().split("T")[0]; // 格式: YYYY-MM-DD

  // 计算本周的开始和结束日期
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay()); // 设置为本周一
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // 本周日
  endOfWeek.setHours(23, 59, 59, 999);

  const startDate = startOfWeek.toISOString().split("T")[0];
  const endDate = endOfWeek.toISOString().split("T")[0];

  switch (catalogueId) {
    case "all":
      data = await sql`
    SELECT * FROM public.todos
   `;
      break;
    case "today":
      data = await sql`
      SELECT * FROM public.todos WHERE created_at::date = ${nowDate}
     `;
      break;
    case "week":
      data = await sql`
      SELECT * FROM public.todos WHERE created_at::date BETWEEN ${startDate} AND ${endDate}
     `;
      break;
    case "done":
      data = await sql`
        SELECT * FROM public.todos WHERE status = 'done'
       `;
      break;
    case "week":
      data = await sql`
          SELECT * FROM public.todos WHERE created_at::date BETWEEN ${startDate} AND ${endDate}
         `;
      break;
    default:
      break;
  }

  return NextResponse.json({ data });
}
