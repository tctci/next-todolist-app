
import { signInWithGitHub } from "@/app/lib/actions"
 
export default function SignIn() {
  return (
    <form action={signInWithGitHub}>
        <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}