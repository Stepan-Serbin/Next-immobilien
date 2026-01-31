import Link from "next/link";
import SignInSignOut from "../sign-in-sign-out";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/auth-options";
import { authorizedLinks, links } from "./links";

const generalLinks = links.map(({ href, text }) => (
  <Link key={href} href={href} className="text-blue-700 hover:text-amber-600">
    {text}
  </Link>
));

const navigationLinksAuthorized = authorizedLinks.map(({ href, text }) => (
  <Link key={href} href={href} className="text-blue-700 hover:text-amber-600">
    {text}
  </Link>
));

const isAuthorized = async () => {
  const session = await getServerSession(authOptions);
  return session ? true : false;
};

const checkCustomer = async () => {
  const session = await getServerSession(authOptions);
  return session?.user.role === "customer" ? true : false;
};

export default async function NavBar() {
  const isAuth = await isAuthorized();
  const isCustomer = await checkCustomer();
  return (
    <nav className="w-full flex justify-center gap-2 my-4">
      {generalLinks}
      {isAuth && navigationLinksAuthorized}

      {isCustomer && <Link href={"/about"}>Customer</Link>}
      <SignInSignOut />
    </nav>
  );
}
