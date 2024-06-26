import Link from 'next/link';

export default function About() {
  return (
    <div className="h-screen flex-col bg-gray-50 flex-center">
      <h4>About Page</h4>
      <Link href="/">Home</Link>
    </div>
  );
}
