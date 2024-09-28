import {
  Text,
  type TextBaseProps,
  type TextVariant,
  type HeadingSize,
  type TextSize,
} from './text';

interface HeadingOptions {
  /**
   * @default 'heading'
   */
  variant?: TextVariant;
  size?: HeadingSize | TextSize;
}
interface HeadingProps extends HeadingOptions, TextBaseProps {
  /**
   * @default 'h2'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({
  children,
  className,
  as = 'h2',
  variant = 'heading',
  size,
  ...props
}: HeadingProps) {
  return (
    <Text as={as} variant={variant} size={size} className={className} {...props}>
      {children}
    </Text>
  );
}
