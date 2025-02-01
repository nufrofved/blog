import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'nufrofved',
    template: '%s | nufrofved',
  },
  description:
    '이 블로그는 프론트엔드 개발자로 일하면서 경험한 것들, 배운 점을 남겨두기 위해 만들어졌습니다. 주로 React, Next.js 에 대해 직접 쓴 글 또는 번역한 글을 올릴 예정이며, 가끔 개인적인 관심사에 대한 글을 쓰기도 합니다.',
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
            <h1 className="font-medium">I develop something for fun</h1>
          </header>
          <main className="py-4">{children}</main>
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
