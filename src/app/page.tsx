import { ThemeToggle } from '@/components/ui';

export default function Home() {
  return (
    <div className="relative h-screen bg-base-100">
      <div className="absolute right-2 top-2">
        <ThemeToggle />
      </div>
      <div className="flex justify-center">
        <h4 className="mt-10">Barebones TW Next Starter w/ DaisyUI</h4>
      </div>
    </div>
  );
}
