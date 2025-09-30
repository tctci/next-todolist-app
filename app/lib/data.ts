import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export const getUserFromDb = async (email: string, password: string) => {
    const data = await sql`
    SELECT * FROM public.users WHERE email = ${email} AND password = ${password} LIMIT 1
    `;
  return data[0] || null
};


const users = [
  {
    email: "atapas@email.com",
    password: "password"
  },
  {
    email: "alex@email.com",
    password: "password"
  },
  {
    email: "bob@email.com",
    password: "password"
  }
]

export const getUserByEmail = (email:string) => {
  const found = users.find(user => user.email === email);
  return found;
}

export const getPlans = async() =>{
  return await sql`
  SELECT * FROM public.plan
  `;
}

export const getTodos = async() =>{
  return await sql`
  SELECT * FROM public.todos
  `;
}

