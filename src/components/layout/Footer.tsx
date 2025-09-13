import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook },
  { href: 'https://twitter.com', icon: Twitter },
  { href: 'https://linkedin.com', icon: Linkedin },
  { href: 'https://github.com', icon: Github },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Logo textClassName="text-primary" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Innovating Solutions, Driving Growth.
            </p>
            <div className="mt-8 flex space-x-6">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                  <span className="sr-only">{Icon.displayName}</span>
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-primary">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                {navItems.map(({ href, label }) => (
                  <Link key={href} href={href} className="text-muted-foreground hover:text-accent">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-semibold text-primary">Services</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm">
                <Link href="/services" className="text-muted-foreground hover:text-accent">Web Development</Link>
                <Link href="/services" className="text-muted-foreground hover:text-accent">Software Development</Link>
                <Link href="/services" className="text-muted-foreground hover:text-accent">Data & Analytics</Link>
                <Link href="/services" className="text-muted-foreground hover:text-accent">IT Consulting</Link>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-primary">Contact Us</p>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <a href="mailto:olalinktech@gmail.com" className="flex items-center gap-2 hover:text-accent">
                  olalinktech@gmail.com
                </a>
                <a href="tel:+234 9062 041 051" className="flex items-center gap-2 hover:text-accent">
                 Phone: +234 9062 041 051, <br /> Phone: +234 916 712 6413
                </a>
                <p>83A Ebute metta East Lagos.<br />12, Toyin Modupe street, Sanni, Lafenwa, Abeokuta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OlaLink Technology Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
