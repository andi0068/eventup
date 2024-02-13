import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

interface IconProps extends React.ComponentPropsWithRef<'span'> {
  asChild?: boolean;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ children, className, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp ref={ref} className={cn('shrink-0 w-[1em] h-[1em] stroke-1', className)} {...props}>
        {children}
      </Comp>
    );
  },
);

export default Icon;
