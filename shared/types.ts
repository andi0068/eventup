export type WithClassProp<P extends object> = P & { className?: string };
export type WithAsProp<P extends object> = P & { asChild?: boolean };

export interface BaseProps {
  children?: React.ReactNode;
}
