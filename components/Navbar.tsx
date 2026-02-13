import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-rose-800 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Shubh Milan</h1>

      <div className="space-x-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/register">Register</Link>
        <Link href="/love-arrange">Love to Arrange</Link>
        <Link href="/success-stories">Success</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
