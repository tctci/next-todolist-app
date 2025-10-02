import { handlers } from "@/auth" // Referring to the auth.ts we just created
export const { GET, POST } = handlers
export const runtime = "nodejs" // 使用 Node.js 运行时以支持 postgres 包