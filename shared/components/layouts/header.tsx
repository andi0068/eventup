import { Heading } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <header className="text-white bg-neutral-800">{children}</header>;
}

export function Content({ children }: BaseProps) {
  return <div className="flex items-center justify-between h-20 lg:h-[5.875rem]">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return (
    <Heading as="h1" className="text-2xl leading-none">
      {children}
    </Heading>
  );
}

export function ActionGroup({ children }: BaseProps) {
  return (
    <div role="group" className="hidden space-x-4 lg:inline-flex">
      {children}
    </div>
  );
}
