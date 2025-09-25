import NextAuth, { CredentialsSignin, User } from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import { ZodError } from "zod"
import { signInSchema } from "@/app/lib/zod"
import { getUserByEmail, getUserFromDb } from "@/app/lib/data"
import NeonAdapter from "@auth/neon-adapter"
import { Pool } from "@neondatabase/serverless"
export const { handlers, signIn, signOut, auth } = NextAuth(()=>{

  const pool = new Pool({ connectionString: process.env.DATABASE_URL }) as any
  return {
    callbacks: {
      authorized: async ({ auth }) => {
        // Logged in users are authenticated, otherwise redirect to login page
        return !!auth
      },
    },
    adapter: NeonAdapter(pool),
    providers: [
    
      Credentials({
 
        credentials: {
          email: {
            type: "email",
            label: "Email",
            placeholder: "johndoe@gmail.com",
          },
          password: {
            type: "password",
            label: "Password",
            placeholder: "*****",
          },
        },
        async authorize(credentials) {
          if (credentials === null) return null;
          
          try {
              const user = getUserByEmail(credentials?.email as string);
              console.log(user);
              if (user) {
                  const isMatch = user?.password === credentials.password;

                  if (isMatch) {
                      return user;
                  } else {
                      throw new Error("Email or Password is not correct");
                  }
              } else {
                  throw new Error("User not found");
              }
          } catch (error) {
              throw new Error(error as string);
          }
      },
      }),
      GitHub,
    ],
  }
})