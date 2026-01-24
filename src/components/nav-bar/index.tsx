import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/about">Learn about us</Link>
      <Link href="/career">Career</Link>
    </nav>
  );
}