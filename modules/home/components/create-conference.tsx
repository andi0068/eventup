import { Heading, Text } from '@/shared/components/ui/typography';
import { cn } from '@/shared/utils/tw';
import type { BaseProps, WithClassProp } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="pt-6 pb-14 lg:py-10">{children}</section>;
}

export function Content({ children, className }: WithClassProp<BaseProps>) {
  return (
    <div
      className={cn(
        'desktop-grid py-14 px-6 rounded-2xl text-white bg-[#953314] lg:items-center lg:py-[6.25rem] lg:px-0',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Header({ children }: BaseProps) {
  return <div className="mb-8 lg:mb-0 lg:col-start-2 lg:col-end-7">{children}</div>;
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
    <Text as="p" size="lg" className="text-neutral-50">
      {children}
    </Text>
  );
}

export function Actions({ children }: BaseProps) {
  return (
    <div
      role="group"
      className="flex flex-col space-y-4 lg:col-start-8 lg:col-end-12 lg:flex-row lg:justify-end lg:space-y-0 lg:space-x-6"
    >
      {children}
    </div>
  );
}
