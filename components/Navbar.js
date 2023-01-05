import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function Navbar() {
  const { data: session, status } = useSession();

  // console.log();

  console.log(useSession());
  // console.log(session);
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav `}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!session && (
          <li>
            <Link href="/api/auth/signin" legacyBehavior>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <Link href="/api/auth/signout" legacyBehavior>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        )}

        {session && (
          <li>
            <h6>{session?.user?.name.split(" ")[0]}</h6>
            <img src={session?.user?.image} width="20" height="20" />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
