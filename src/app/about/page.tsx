import Link from 'next/link';

export default function About() {
  return (
    <div className="h-screen flex-col bg-gray-50 flex-center">
      <h1>About Page</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
