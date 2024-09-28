import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <footer className="py-4 lg:py-0">{children}</footer>;
}
