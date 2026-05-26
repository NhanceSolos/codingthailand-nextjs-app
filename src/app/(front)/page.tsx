import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href="/">Home</Link> | <Link href="/about">About Us</Link> | <Link href="/sign-in">Sign In</Link>
    </div>
  );
}
