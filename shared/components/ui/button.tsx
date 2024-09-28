import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/utils/tw';

export interface ButtonOptions {
  variant?: 'default' | 'outlined' | 'text' | 'icon';
  size?: 'default' | 'lg';
  bg?: 'default';
}
export interface ButtonProps extends ButtonOptions, React.ComponentPropsWithRef<'button'> {
  asChild?: boolean;
}

const variants = cva(
  'inline-flex items-center justify-center select-none whitespace-nowrap font-medium outline-none rounded-lg transition-all focus-visible:ring focus-visible:ring-accent',
  {
    variants: {
      variant: {
        default: 'shadow-md hover:shadow-lg active:shadow-md',
        outlined: 'border border-neutral-50 bg-transparent active:bg-transparent',
        text: 'bg-transparent active:bg-transparent',
        icon: 'size-8 text-xl bg-transparent active:bg-transparent',
      },
      size: {
        default: 'px-6 h-[2.875rem] text-sm leading-[1.625rem]',
        lg: 'px-[1.375rem] h-[3.375rem] text-sm leading-[1.625rem] lg:h-[3.75rem] lg:text-base lg:leading-7',
      },
      bg: {
        default: 'text-white bg-accent',
      },
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      asChild,
      variant = 'default',
      size = 'default',
      bg = 'default',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const variantsProps = {
      default: { variant, size, bg, className },
      outlined: { variant, size, className },
      text: { variant, size, className },
      icon: { variant, className },
    }[variant];

    return (
      <Comp ref={ref} className={cn(variants(variantsProps))} {...props}>
        {children}
      </Comp>
    );
  },
);

export default Button;
