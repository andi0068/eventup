import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="py-10 text-white bg-neutral-700 lg:py-8">{children}</section>;
}

export function Content({ children }: BaseProps) {
  return <div>{children}</div>;
}

export function Title({ children }: BaseProps) {
  return <h2 className="sr-only">{children}</h2>;
}

export function List({ children }: BaseProps) {
  return <ul className="flex flex-wrap gap-4">{children}</ul>;
}

export function Item({ children }: BaseProps) {
  return (
    <li className="inline-flex items-center justify-center w-[9.125rem] h-[5.875rem]">
      {children}
    </li>
  );
}
