import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/shared/utils/tw';

export interface IconProps extends React.ComponentPropsWithRef<'span'> {
  element: React.ReactElement;
}

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ children, className, element, ...props }, ref) => (
    <Slot
      ref={ref}
      className={cn('shrink-0 size-[1em] stroke-1 text-current', className)}
      {...props}
    >
      {element}
    </Slot>
  ),
);

export default Icon;
