import { useMemo } from 'react';
import { Slot } from '@radix-ui/react-slot';

import * as SVGs from '@/modules/home/components/svgs';
import { Heading, Text } from '@/shared/components/ui/typography';
import type { BaseProps, WithAsProp } from '@/shared/types';

export function Root({ children }: BaseProps) {
  return <section className="py-14 lg:py-20">{children}</section>;
}

export function Content({ children }: BaseProps) {
  return <div className="desktop-grid space-y-10 lg:pt-6 lg:space-y-0">{children}</div>;
}

export const Profile = {
  Root({ children }: BaseProps) {
    return (
      <header className="flex items-center space-x-4 lg:row-start-1 lg:col-start-2 lg:col-end-6 lg:h-fit">
        {children}
      </header>
    );
  },

  Avatar({ children, asChild }: WithAsProp<BaseProps>) {
    const Comp = asChild ? Slot : 'div';
    return <Comp className="w-14 h-14 object-cover rounded-full lg:w-20 lg:h-20">{children}</Comp>;
  },

  Content({ children }: BaseProps) {
    return <div className="space-y-1 lg:space-y-2">{children}</div>;
  },

  DisplayName({ children }: BaseProps) {
    return (
      <Heading size="xl-semibold" className="lg:text-2xl lg:leading-[1.4]">
        {children}
      </Heading>
    );
  },

  Description({ children }: BaseProps) {
    return (
      <Text as="p" size="[md,lg]" className="text-neutral-500">
        {children}
      </Text>
    );
  },
};

export function Blockquote({ children = '' }: { children?: string }) {
  const words = useMemo(() => children.split(' '), [children]);
  return (
    <Text
      as="blockquote"
      variant="[none,heading]"
      size="[none,h3]"
      className="flex flex-wrap ml-8 pt-11 text-[2rem] leading-normal font-medium lg:col-start-7 lg:col-end-12 lg:ml-0 lg:pt-0"
    >
      {words.map((word, i) => {
        if (i === 0) {
          return (
            <span key={i} className="relative inline-flex">
              <SVGs.Quote.Start className="absolute -top-5 -left-2 rounded-full text-accent bg-accent/10 shadow-[0_0_0_1.5rem_none] shadow-accent/10 lg:top-0 lg:-left-5 lg:-translate-x-2" />
              {word}&nbsp;
            </span>
          );
        }
        if (i === words.length - 1) {
          return (
            <span key={i} className="relative inline-flex">
              {word}
              <SVGs.Quote.End className="absolute top-0 -right-5 translate-x-2 text-accent" />
            </span>
          );
        }
        return <span key={i}>{word}&nbsp;</span>;
      })}
    </Text>
  );
}
