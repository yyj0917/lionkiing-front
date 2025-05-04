import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SKYST LionKiing',
  description: 'SKYST LionKiing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
