import Link from 'next/link';
import { ThemeToggle } from '@/components/ui';
import { Counter } from '@/components';

export default function Home() {
  return (
    <div className="bg-base-100 relative h-screen">
      <div className="absolute right-2 top-3">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center pt-10">
        <h1>Home</h1>
        <Link href="/about">About</Link>
        <h4 className="">Barebones TW Next Starter</h4>
        <h5>With Daisy UI</h5>
        <h5>With Zustand</h5>
        <Counter />
      </div>
    </div>
  );
}
