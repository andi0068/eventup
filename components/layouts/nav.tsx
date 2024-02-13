import { Slot } from '@radix-ui/react-slot';

import { Text } from '@/components/typography';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import FiMenu from '@/components/svgs/menu';

type WithAsProp<T extends object> = T & { asChild?: boolean };

interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return <nav>{children}</nav>;
}

export function Content({ children }: BaseProps) {
  return <ul className="hidden space-x-10 lg:flex">{children}</ul>;
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
      variant="outline"
      size="icon"
      className="border-neutral-300 lg:hidden"
      aria-label="Toggle Menu"
    >
      <Icon asChild>
        <FiMenu />
      </Icon>
    </Button>
  );
}
