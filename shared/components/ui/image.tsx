import Next from 'next/image';

import { isString } from '@/shared/utils/is';

export type ImageSizes = string | readonly [number, number];

export interface ImageProps {
  alt: string;
  width: number;
  height: number;
  src: string;
  className?: string;
  sizes?: ImageSizes;
  priority?: boolean;
}

export default function Image({ className, sizes, ...props }: ImageProps) {
  return <Next sizes={getSizes(sizes)} className={className} {...props} />;
}

function getSizes(sizes?: ImageSizes) {
  if (!sizes) return;
  return isString(sizes) ? sizes : `(max-width: 768px) ${sizes[0]}px, ${sizes[1]}px`;
}
