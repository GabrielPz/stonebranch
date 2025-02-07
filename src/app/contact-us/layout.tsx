import { LayoutDefault } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stonebranch',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/about-us/93c3667299008cd8a4a7.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <LayoutDefault>{children}</LayoutDefault>
    </div>
  );
}
