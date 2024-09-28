import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="py-14 bg-[#F8F8F8] lg:py-20">{children}</section>;
}

export function Content({ children }: BaseProps) {
  return <div className="desktop-grid space-y-8 lg:items-center lg:space-y-0">{children}</div>;
}

export function ImageContent({ children }: BaseProps) {
  return <div className="lg:row-start-1 lg:col-start-2 lg:col-end-7">{children}</div>;
}

export function TextContent({ children }: BaseProps) {
  return <div className="lg:col-start-8 lg:col-end-12">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return (
    <Heading size="[h5,h3]" className="mb-4 lg:mb-6">
      {children}
    </Heading>
  );
}

export function Description({ children }: BaseProps) {
  return (
    <Text as="p" size="lg" className="text-neutral-500 lg:text-xl lg:leading-[2.125rem]">
      {children}
    </Text>
  );
}
