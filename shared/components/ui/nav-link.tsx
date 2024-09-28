'use client';
import Link, { type LinkProps } from 'next/link';

import useLinkIsActive from '@/shared/hooks/use-link-is-active';
import { isObject } from '@/shared/utils/is';
import type { BaseProps, WithClassProp } from '@/shared/types';

export interface NavLinkProps extends LinkProps, WithClassProp<BaseProps> {
  exact?: boolean;
}

export default function NavLink({ children, href, exact, ...props }: NavLinkProps) {
  const active = useLinkIsActive({
    href: isObject(href) ? href.href || '' : href,
    exact,
  });

  return (
    <Link href={href} aria-current={active ? 'page' : undefined} {...props}>
      {children}
    </Link>
  );
}
