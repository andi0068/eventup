import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="lg:col-span-2">{children}</section>;
}

export function Title({ children }: BaseProps) {
  return <Heading className="mb-4 text-3xl leading-none">{children}</Heading>;
}

export function Description({ children }: BaseProps) {
  return (
    <Text as="p" size="lg" className="text-neutral-400">
      {children}
    </Text>
  );
}
