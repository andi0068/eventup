import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { isActive } from '@/shared/utils/client-api/pathname';

export interface UseLinkIsActiveProps {
  href: string;
  exact?: boolean;
}

export default function useLinkIsActive({ href, exact }: UseLinkIsActiveProps) {
  const pathname = usePathname();
  return useMemo(() => isActive(pathname, href, exact), [pathname, href, exact]);
}
