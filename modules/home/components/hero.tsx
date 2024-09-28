import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return (
    <section className="pt-10 pb-14 text-white bg-neutral-800 lg:pt-14 lg:pb-[5.5rem]">
      {children}
    </section>
  );
}

export function Content({ children }: BaseProps) {
  return <div className="desktop-grid space-y-10 lg:items-center lg:space-y-0">{children}</div>;
}

export function ImageContent({ children }: BaseProps) {
  return <div className="lg:row-start-1 lg:col-start-8 lg:col-end-13">{children}</div>;
}

export function TextContent({ children }: BaseProps) {
  return <div className="lg:col-start-1 lg:col-end-7">{children}</div>;
}

export function Title({ children }: BaseProps) {
  return (
    <Heading size="[h4,h1]" className="mb-4 lg:mb-6">
      {children}
    </Heading>
  );
}

export function Description({ children }: BaseProps) {
  return (
    <Text as="p" size="[lg,xl]" className="text-neutral-50">
      {children}
    </Text>
  );
}

export function Actions({ children }: BaseProps) {
  return (
    <div
      role="group"
      className="flex flex-col mt-10 space-y-4 lg:flex-row lg:mt-14 lg:space-y-0 lg:space-x-6"
    >
      {children}
    </div>
  );
}
