import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/terminal">Terminal</Link><br></br>
      <Link href="/content">Content</Link>
    </div>
  );
}
