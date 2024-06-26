import { Counter } from '@/components';

export default function Home() {
  return (
    <div className="h-screen flex-col bg-gray-50 flex-center">
      <h4>Barebones TW Next Starter</h4>
      <h5>With Zustand</h5>
      <Counter />
    </div>
  );
}
