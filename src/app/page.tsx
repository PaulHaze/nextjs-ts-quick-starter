import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex-col bg-gray-50 flex-center">
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  );
}
