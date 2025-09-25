
import { signOutWithGitHub } from "@/app/lib/actions"
 
export default function SignOut() {
  return (
    <form action={signOutWithGitHub}>

      <button type="submit">SignOut with GitHub</button>
    </form>
  )
} 