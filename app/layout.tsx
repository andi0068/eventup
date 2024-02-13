import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';
import * as Header from '@/components/layouts/header';
import * as Nav from '@/components/layouts/nav';
import * as Footer from '@/components/layouts/footer';
import Container from '@/components/layouts/container';
import Brand from '@/components/ui/brand';
import NavLink from '@/components/ui/nav-link';
import Input from '@/components/ui/input';
import Button from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ArrowRight from '@/components/svgs/arrow-right';
import { siteConfig } from '@/config/site';

import './globals.css';

const sans = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

const props = {
  header: {
    title: siteConfig.name,
    menu: [
      { label: 'Home', href: '/', exact: true },
      { label: 'About', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Career', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  footer: {
    content: {
      info: {
        title: siteConfig.name,
        description: siteConfig.description,
      },
      links: [
        {
          name: 'Products',
          items: [
            { label: 'Conference', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Solution', href: '#' },
          ],
        },
        {
          name: 'Company',
          items: [
            { label: 'About', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'Careers', href: '#' },
            { label: 'Blog', href: '#' },
          ],
        },
        {
          name: 'Support',
          items: [
            { label: 'Contact Us', href: '#' },
            { label: 'Support Policy', href: '#' },
            { label: 'Talk to Sales', href: '#' },
          ],
        },
      ],
    },
    copyright: {
      copy: '© 2022 EventUp, Inc.',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Settings', href: '#' },
      ],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(sans.className, 'flex flex-col min-h-screen antialiased text-neutral-800')}
      >
        <Header.Root>
          <Container>
            <Header.Content>
              <Header.Title>
                <Brand>{props.header.title}</Brand>
              </Header.Title>
              <Nav.Root>
                <Nav.Toggle />
                <Nav.Content>
                  {props.header.menu.map(({ label, href, exact }) => (
                    <Nav.Item asChild key={label}>
                      <NavLink href={href} exact={exact}>
                        {label}
                      </NavLink>
                    </Nav.Item>
                  ))}
                </Nav.Content>
              </Nav.Root>
              <Header.Actions>
                <Button type="button" variant="ghost">
                  Log In
                </Button>
                <Button type="button">Sign Up</Button>
              </Header.Actions>
            </Header.Content>
          </Container>
        </Header.Root>
        {children}
        <Footer.Root>
          <Container>
            <Footer.Content>
              <Footer.InfoSection.Root>
                <Footer.InfoSection.Title>
                  <Brand>{props.footer.content.info.title}</Brand>
                </Footer.InfoSection.Title>
                <Footer.InfoSection.Description>
                  {props.footer.content.info.description}
                </Footer.InfoSection.Description>
              </Footer.InfoSection.Root>
              <Footer.LinkSection.Group>
                {props.footer.content.links.map(({ name, items }) => (
                  <Footer.LinkSection.Root key={name}>
                    <Footer.LinkSection.Title>{name}</Footer.LinkSection.Title>
                    <Footer.LinkSection.List>
                      {items.map(({ label, href }) => (
                        <Footer.LinkSection.Item key={label}>
                          <a href={href}>{label}</a>
                        </Footer.LinkSection.Item>
                      ))}
                    </Footer.LinkSection.List>
                  </Footer.LinkSection.Root>
                ))}
              </Footer.LinkSection.Group>
              <Footer.FormSection.Root>
                <Footer.FormSection.Header>
                  <Footer.FormSection.Title>Subscribe to our newsletter.</Footer.FormSection.Title>
                  <Footer.FormSection.Description>
                    Want to stay up to date with news and updates about our product? Subscribe.
                  </Footer.FormSection.Description>
                </Footer.FormSection.Header>
                <form className="relative h-fit">
                  <Input
                    type="email"
                    name="email"
                    placeholder="email@provider.com"
                    required
                    className="pr-[3.25rem]"
                  />
                  <Icon asChild className="absolute top-1/2 right-4 -translate-y-1/2 text-xl">
                    <ArrowRight />
                  </Icon>
                </form>
                <Footer.FormSection.Footer>
                  <Footer.FormSection.FootNote>
                    By subscribing to our newsletter you agree to our privacy policy and will get
                    commercial communication.
                  </Footer.FormSection.FootNote>
                </Footer.FormSection.Footer>
              </Footer.FormSection.Root>
            </Footer.Content>
            <hr />
            <Footer.Copyright.Root>
              <Footer.Copyright.Text>{props.footer.copyright.copy}</Footer.Copyright.Text>
              <Footer.Copyright.LinkList>
                {props.footer.copyright.links.map(({ label, href }) => (
                  <Footer.Copyright.LinkItem key={label}>
                    <a href={href}>{label}</a>
                  </Footer.Copyright.LinkItem>
                ))}
              </Footer.Copyright.LinkList>
            </Footer.Copyright.Root>
          </Container>
        </Footer.Root>
      </body>
    </html>
  );
}
