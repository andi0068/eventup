import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="lg:col-span-3">{children}</section>;
}

export function Header({ children }: BaseProps) {
  return <header className="mb-6">{children}</header>;
}

export function Title({ children }: BaseProps) {
  return (
    <Heading variant="text" size="xl-semibold" className="mb-4">
      {children}
    </Heading>
  );
}

export function Description({ children }: BaseProps) {
  return (
    <Text as="p" size="lg" className="max-w-[286px] text-neutral-400 lg:max-w-full">
      {children}
    </Text>
  );
}

export function Footer({ children }: BaseProps) {
  return <footer className="mt-4 lg:mt-6">{children}</footer>;
}

export function FootNote({ children }: BaseProps) {
  return (
    <Text as="p" size="sm" className="text-neutral-200">
      {children}
    </Text>
  );
}
