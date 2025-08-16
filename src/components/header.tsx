'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold">
          Sarthak
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/80 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <Button asChild variant="outline">
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
}
