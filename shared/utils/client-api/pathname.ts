export function isActive(currentPathname: string, href: string, exact?: boolean) {
  const { pathname } = new URL(href, 'http://localhost:3000');
  return exact ? currentPathname === pathname : currentPathname.startsWith(pathname);
}
