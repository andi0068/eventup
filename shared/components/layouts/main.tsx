import type { BaseProps } from '@/shared/types';

export default function Main({ children }: BaseProps) {
  return <main className="grow">{children}</main>;
}
