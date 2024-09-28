import { forwardRef } from 'react';

import { cn } from '@/shared/utils/tw';

const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full outline-none border border-transparent rounded-lg transition-all placeholder:text-neutral-500 focus:border-accent focus:ring focus:ring-accent',
        'border-neutral-50',
        'p-4 h-[3.625rem] text-sm leading-[1.625rem]',
        className,
      )}
      {...props}
    />
  ),
);

export default Input;
