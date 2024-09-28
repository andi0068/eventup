import type { BaseProps } from '@/shared/types';

export function Content({ children }: BaseProps) {
  return (
    <div className="py-10 space-y-10 lg:grid lg:grid-cols-12 lg:gap-x-5 lg:py-20 lg:space-y-0">
      {children}
    </div>
  );
}
