import { Slot } from '@radix-ui/react-slot';

import { Text } from '@/shared/components/ui/typography';
import Button from '@/shared/components/ui/button';
import Icon from '@/shared/components/ui/icon';
import MenuSvg from '@/shared/components/ui/svgs/menu';
import type { BaseProps, WithAsProp } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <nav>{children}</nav>;
}

export function Content({ children }: BaseProps) {
  return <ul className="hidden space-x-10 lg:inline-flex">{children}</ul>;
}

export function Item({ children, asChild }: WithAsProp<BaseProps>) {
  const Comp = asChild ? Slot : 'span';
  return (
    <Text as="li" size="lg-medium">
      <Comp className="py-3 outline-none border-b border-transparent transition-colors hover:border-current focus:border-current aria-[current]:border-accent aria-[current]:focus:border-current">
        {children}
      </Comp>
    </Text>
  );
}

export function Toggle() {
  return (
    <Button
      type="button"
      variant="icon"
      className="border border-neutral-300 lg:hidden"
      aria-label="Toggle Menu"
    >
      <Icon element={<MenuSvg />} />
    </Button>
  );
}
