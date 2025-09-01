
"use client";

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { useEffect, useState } from 'react';

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t border-primary/10 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold text-glow">
            SarthakVerse
          </Link>
          <p className="text-sm text-muted-foreground">© {year} All rights reserved.</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary/80 transition-colors hover:text-primary hover:text-glow"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
