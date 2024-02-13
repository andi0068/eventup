import { cn } from '@/lib/utils';

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto px-6 max-w-[1440px] lg:px-20', className)}>{children}</div>;
}
