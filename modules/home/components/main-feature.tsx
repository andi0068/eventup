import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="py-14 lg:py-[6.25rem]">{children}</section>;
}

export function Content({ children }: BaseProps) {
  return <div className="desktop-grid flex flex-col gap-y-8 lg:gap-y-16">{children}</div>;
}

export function ImageContent({ children }: BaseProps) {
  return <div className="lg:row-start-2 lg:col-start-2 lg:col-end-12">{children}</div>;
}

export function TextContent({ children }: BaseProps) {
  return <div className="text-center lg:col-start-3 lg:col-end-11">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return (
    <Heading size="[h5,h3]" className="mb-4">
      {children}
    </Heading>
  );
}

export function Description({ children }: BaseProps) {
  return (
    <Text as="p" size="[lg,xl]" className="text-neutral-500">
      {children}
    </Text>
  );
}
