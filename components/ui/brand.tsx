import Logo from '@/components/svgs/logo';

import Icon from './icon';

interface BrandProps {
  children?: React.ReactNode;
}

export default function Brand({ children }: BrandProps) {
  return (
    <span className="inline-flex items-center">
      <Icon asChild className="mr-3 h-fit text-[2.875em] text-accent">
        <Logo />
      </Icon>
      {children}
    </span>
  );
}
