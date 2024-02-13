interface BaseProps {
  children?: React.ReactNode;
}

export default function Main({ children }: BaseProps) {
  return <main className="grow">{children}</main>;
}
