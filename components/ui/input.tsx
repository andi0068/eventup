import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

const Input = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<'input'>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'flex w-full outline-none border border-transparent rounded-lg transition-[border-color,box-shadow] placeholder:text-neutral-500 hover:border-accent focus:border-accent focus:ring focus:ring-accent/20',
        'border-neutral-50',
        'p-4 h-[3.625rem] text-sm leading-[1.625rem]',
        className,
      )}
      {...props}
    />
  ),
);

export default Input;
