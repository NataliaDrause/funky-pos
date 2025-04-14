import type { Metadata } from "next";
import { Chivo } from 'next/font/google';
import './globals.scss';

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s - Funky POS',
    default: 'Funky POS',
  },
  description: 'Point of Sale system for Funky POS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${chivo.className}`}>{children}</body>
    </html>
  );
}
