import type { Metadata } from 'next';

import '@/styles/main.scss';

// !CHANGETHIS
export const metadata: Metadata = {
  title: 'CHANGE THIS',
  description: 'CHANGE THIS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
