import { ReactNode } from 'react';

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <article className="prose">{children}</article>;
}
