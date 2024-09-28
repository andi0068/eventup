import { cva } from 'class-variance-authority';

import { cn } from '@/shared/utils/tw';

export type TextVariant = 'heading' | 'text' | '[none,heading]';
export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | '[none,h3]' | '[h4,h1]' | '[h5,h3]';
export type TextSize =
  | 'sm'
  | 'sm-medium'
  | 'md'
  | 'md-medium'
  | 'lg'
  | 'lg-medium'
  | 'xl'
  | 'xl-semibold'
  | '[md,lg]'
  | '[lg,xl]';

export interface TextOptions {
  /**
   * @default 'text'
   */
  variant?: TextVariant;
  size?: HeadingSize | TextSize;
}
export interface TextBaseProps extends React.AriaAttributes {
  children?: React.ReactNode;
  className?: string;
  role?: React.AriaRole;
  as?: keyof JSX.IntrinsicElements;
}
export type TextProps = TextOptions & TextBaseProps;

const sizes = {
  _: {
    // heading
    h1: 'text-[4.375rem] leading-[1.2]',
    h2: 'text-[3.5rem] leading-[1.2]',
    h3: 'text-[2.75rem] leading-[1.26]',
    h4: 'text-4xl leading-[1.26]',
    h5: 'text-[1.75rem] leading-[1.3]',
    // text
    sm: 'text-xs leading-[1.2]',
    'sm-medium': 'text-xs leading-[1.375rem] font-medium',
    md: 'text-sm leading-[1.625rem]',
    'md-medium': 'text-sm leading-[1.625rem] font-medium',
    lg: 'text-base leading-7',
    'lg-medium': 'text-base leading-7 font-medium',
    xl: 'text-xl leading-[2.125rem]',
    'xl-semibold': 'text-xl leading-[1.4] font-semibold',
  },
  lg: {
    // heading
    h1: 'lg:text-[4.375rem] lg:leading-[1.2]',
    h3: 'lg:text-[2.75rem] lg:leading-[1.26]',
    // text
    lg: 'lg:text-base lg:leading-7',
    xl: 'lg:text-xl lg:leading-[2.125rem]',
  },
};

const variants = cva(undefined, {
  variants: {
    variant: {
      heading: 'font-semibold',
      text: undefined,
      '[none,heading]': 'lg:font-semibold',
    },
    size: {
      ...sizes._,
      // heading
      '[none,h3]': sizes.lg.h3,
      '[h4,h1]': cn(sizes._.h4, sizes.lg.h1),
      '[h5,h3]': cn(sizes._.h5, sizes.lg.h3),
      // text
      '[md,lg]': cn(sizes._.md, sizes.lg.lg),
      '[lg,xl]': cn(sizes._.lg, sizes.lg.xl),
    },
  },
});

export function Text({
  children,
  className,
  as: Comp = 'span',
  variant = 'text',
  size,
  ...props
}: TextProps) {
  return (
    <Comp className={cn(variants({ variant, size, className }))} {...props}>
      {children}
    </Comp>
  );
}
