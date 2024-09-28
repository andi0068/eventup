import { useMemo } from 'react';

import { Heading, Text } from '@/shared/components/ui/typography';
import Icon from '@/shared/components/ui/icon';
import CheckCircle from '@/shared/components/ui/svgs/check-circle';
import { cn } from '@/shared/utils/tw';
import type { BaseProps, WithClassProp } from '@/shared/types';

export function Root({ children, className }: WithClassProp<BaseProps>) {
  return (
    <section className={cn('pt-14 pb-10 text-white bg-neutral-800 lg:py-[6.25rem]', className)}>
      {children}
    </section>
  );
}

export function Content({ children }: BaseProps) {
  return <div className="desktop-grid space-y-8 lg:items-center lg:space-y-0">{children}</div>;
}

export function ImageContent({ children }: BaseProps) {
  return <div className="lg:row-start-1 lg:col-start-8 lg:col-end-13">{children}</div>;
}

export function TextContent({ children }: BaseProps) {
  return <div className="lg:col-start-1 lg:col-end-7">{children}</div>;
}

export function Header({ children }: BaseProps) {
  return <div className="mb-10">{children}</div>;
}

export function Title({ children = '' }: { children?: string }) {
  const words = useMemo(() => children.split(' '), [children]);
  return (
    <Heading
      variant="text"
      className="flex flex-wrap mb-4 uppercase text-xs leading-[1.2] tracking-[.2em] text-neutral-200 lg:text-base lg:leading-7 lg:font-medium"
    >
      {words.map((word, i) => {
        if (i === 0) {
          return (
            <span key={i} className="inline-flex items-center">
              <span className="mr-2 w-5 h-px border-t border-current" />
              {word}&nbsp;
            </span>
          );
        }
        return i === words.length - 1 ? (
          <span key={i}>{word}</span>
        ) : (
          <span key={i}>{word}&nbsp;</span>
        );
      })}
    </Heading>
  );
}

export function SubTitle({ children }: BaseProps) {
  return (
    <Heading as="h3" size="[h5,h3]" className="mb-6">
      {children}
    </Heading>
  );
}

export function SubDescription({ children }: BaseProps) {
  return (
    <Text as="p" size="lg" className="text-neutral-50">
      {children}
    </Text>
  );
}

export function ListGroup({ children }: BaseProps) {
  return (
    <div role="group" className="grid grid-cols-2 gap-y-8 lg:gap-y-10 lg:gap-x-12">
      {children}
    </div>
  );
}

export function List({ children }: BaseProps) {
  return <ul className="col-span-full space-y-4 lg:col-span-1">{children}</ul>;
}

export function Item({ children }: BaseProps) {
  return (
    <li className="flex items-center space-x-3">
      <Icon element={<CheckCircle />} className="text-2xl text-accent-400" />
      <Text size="lg">{children}</Text>
    </li>
  );
}
