import { auth, signIn } from "@/auth";
import { signOut } from "next-auth/react";


export default async function Home() {
  const session = await auth();
  return (
      <div >
        test <br/>
        { session &&    (
          <form
        action={async () => {
          "use server"
          await signOut();
        }}
      >
        <button className="text-white bg-ig-red px-4 py-2 rounded-lg" type="submit" >Logout</button>
      </form>)}
    { !session &&    <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <button className="text-white bg-ig-red px-4 py-2 rounded-lg" type="submit">Signin with Google</button>
      </form>}
      </div>
  );
}
