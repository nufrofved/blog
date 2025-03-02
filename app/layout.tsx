import './globals.css';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import type { Metadata } from 'next';
import { description } from './constants/meta';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'nufrofved',
    template: '%s | nufrofved',
  },
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen grid grid-rows-[auto_minmax(0,1fr)_auto] max-w-prose mx-auto px-4">
          <header className="pt-8 pb-4">
            <Link href="/">
              <h1 className="font-medium">I develop something for fun</h1>
            </Link>
          </header>
          <main className="py-12">{children}</main>
          <footer className="pt-8 pb-4">
            <ul className="flex gap-4 font-medium">
              <li>
                <a href="mailto:nufrofved@gmail.com">contact</a>
              </li>
              <li>
                <a href="https://github.com/nufrofved">github</a>
              </li>
            </ul>
            <p className=" text-sm text-gray-500 mt-1">
              Inspired by{' '}
              <a className="underline" href="https://leerob.com/">
                Lee Robinson&apos;s blog
              </a>
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
