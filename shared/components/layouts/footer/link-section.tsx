import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Group({ children }: BaseProps) {
  return (
    <div
      role="group"
      className="grid grid-cols-2 gap-y-6 gap-x-14 lg:col-span-7 lg:flex lg:justify-center"
    >
      {children}
    </div>
  );
}

export function Root({ children }: BaseProps) {
  return <section className="col-span-1">{children}</section>;
}

export function Title({ children }: BaseProps) {
  return (
    <Heading variant="text" size="xl-semibold" className="mb-4">
      {children}
    </Heading>
  );
}

export function List({ children }: BaseProps) {
  return <ul className="space-y-2">{children}</ul>;
}

export function Item({ children }: BaseProps) {
  return (
    <Text as="li" size="lg" className="text-neutral-500">
      {children}
    </Text>
  );
}
