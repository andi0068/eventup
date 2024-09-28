import * as Typography from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return (
    <div className="flex flex-col gap-y-6 gap-x-20 py-10 lg:flex-row lg:items-center lg:justify-between">
      {children}
    </div>
  );
}

export function Text({ children }: BaseProps) {
  return (
    <Typography.Text as="p" size="lg" className="text-neutral-500">
      {children}
    </Typography.Text>
  );
}

export function LinkList({ children }: BaseProps) {
  return <ul className="flex flex-wrap gap-y-2 gap-x-6">{children}</ul>;
}

export function LinkItem({ children }: BaseProps) {
  return (
    <Typography.Text as="li" size="lg" className="text-neutral-500">
      {children}
    </Typography.Text>
  );
}
