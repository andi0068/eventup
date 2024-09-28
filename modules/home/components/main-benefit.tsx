import { cn } from '@/shared/utils/tw';
import type { BaseProps, WithClassProp } from '@/shared/types';

export function Root({ children, className }: WithClassProp<BaseProps>) {
  return (
    <section className={cn('pt-10 pb-20 text-white bg-neutral-800 lg:py-[6.25rem]', className)}>
      {children}
    </section>
  );
}

export function ImageContent({ children }: BaseProps) {
  return <div className="lg:row-start-1 lg:col-start-1 lg:col-end-7">{children}</div>;
}

export function TextContent({ children }: BaseProps) {
  return <div className="lg:col-start-8 lg:col-end-13">{children}</div>;
}

export {
  Content,
  Header,
  Title,
  SubTitle,
  SubDescription,
  ListGroup,
  List,
  Item,
} from './other-features';
