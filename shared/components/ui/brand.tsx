import Icon from '@/shared/components/ui/icon';
import Logo from '@/shared/components/ui/svgs/logo';

interface BrandProps {
  name: React.ReactNode;
}

export default function Brand({ name }: BrandProps) {
  return (
    <span className="inline-flex items-center">
      <Icon element={<Logo />} className="mr-3 w-[2.875em] h-fit text-accent" />
      {name}
    </span>
  );
}
