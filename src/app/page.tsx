import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen flex-col bg-gray-50 flex-center">
      <h4>Barebones TW Next Starter</h4>
      <Link href="/about">About</Link>
    </div>
  );
}
