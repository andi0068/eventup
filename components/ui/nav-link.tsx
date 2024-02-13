'use client';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export interface NavLinkProps extends LinkProps {
  href: string;
  children?: React.ReactNode;
  exact?: boolean;
}
export interface UseNavLinkProps {
  href: string;
  exact?: boolean;
}

export default function NavLink({ children, href, exact, ...props }: NavLinkProps) {
  const { active } = useNavLink({ href, exact });
  return (
    <Link href={href} aria-current={active ? 'page' : undefined} {...props}>
      {children}
    </Link>
  );
}

export function useNavLink({ href, exact }: UseNavLinkProps) {
  const pathname = usePathname();
  const active = useMemo(
    () => (exact ? pathname === href : pathname.startsWith(href)),
    [href, exact, pathname],
  );

  return {
    active,
  } as const;
}
