import Next from 'next/image';

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

export default function Image({ className, alt, width, height, src, sizes, priority }: ImageProps) {
  return (
    <Next
      alt={alt}
      width={width}
      height={height}
      src={src}
      sizes={generateSizes(sizes)}
      className={className}
      priority={priority}
    />
  );
}

function generateSizes(sizes?: ImageSizes) {
  if (!sizes) return;
  return typeof sizes === 'string' ? sizes : `(max-width: 768px) ${sizes[0]}px, ${sizes[1]}px`;
}
