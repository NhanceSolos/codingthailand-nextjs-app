import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <p className="text-sky-500 mb-4">About Us</p>
      <Spinner />
      <hr />
      <Button variant="link">
        <Link href="/">Home</Link>
      </Button>
    </main>
  );
}