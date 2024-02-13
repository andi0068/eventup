import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

interface ButtonOptions {
  /**
   * @default 'filled'
   */
  variant?: 'filled' | 'outline' | 'ghost';
  /**
   * @default 'default'
   */
  size?: 'default' | 'lg' | 'icon';
  /**
   * @default 'default'
   */
  bg?: 'default';
}
interface ButtonProps extends ButtonOptions, React.ComponentPropsWithRef<'button'> {
  asChild?: boolean;
}

const variants = cva(
  'inline-flex items-center justify-center whitespace-nowrap select-none font-medium outline-none rounded-lg transition-shadow hover:scale-105 focus-visible:ring focus-visible:ring-offset-[3px] focus-visible:ring-accent/20 active:scale-100 active:opacity-60',
  {
    variants: {
      variant: {
        filled: undefined,
        outline: 'border border-neutral-50',
        ghost: undefined,
      },
      size: {
        default: 'py-[.625rem] px-6 h-[2.875rem] text-sm leading-[1.625rem]',
        lg: [
          'py-[.875rem] px-[1.375rem] h-[3.375rem] text-sm leading-[1.625rem]',
          'lg:py-4 lg:h-[3.75rem] lg:text-base lg:leading-7',
        ],
        icon: 'w-8 h-8',
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
      variant = 'filled',
      size = 'default',
      bg = 'default',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    const variantPropsMap = {
      filled: { variant, size, bg, className },
      outline: { variant, size, className },
      ghost: { variant, size, className },
    } as const;

    return (
      <Comp ref={ref} className={cn(variants(variantPropsMap[variant]))} {...props}>
        {children}
      </Comp>
    );
  },
);

export default Button;
