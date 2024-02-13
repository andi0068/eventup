interface BaseProps {
  children?: React.ReactNode;
}

export function Root({ children }: BaseProps) {
  return <footer className="py-4 lg:py-0">{children}</footer>;
}
