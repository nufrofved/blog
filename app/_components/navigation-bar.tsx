'use client';

import Link, { LinkProps } from 'next/link';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export function NavigationBar() {
  return (
    <nav>
      <ul className="flex gap-4 capitalize">
        <NavItem href={'/'}>home</NavItem>
        <NavItem href={'/about'}>about</NavItem>
        <NavItem href={'/posts'}>posts</NavItem>
      </ul>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: LinkProps & {
  children: ReactNode;
}) {
  const pathname = usePathname();

  return (
    <li className={pathname === href ? 'font-semibold' : ''}>
      <Link href={href}>{children}</Link>
    </li>
  );
}
