import Link from "next/link";
import Login from "./auth/Login";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Logged from "./auth/Logged";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="font-bold text-xl">Send it</h1>
      </Link>
      <ul className="flex items-center gap-6">
        {!session?.user && <Login />}
        {session?.user && (
          <h1>
            <Logged image={session.user?.image || ""} />
          </h1>
        )}
      </ul>
    </nav>
  );
}
