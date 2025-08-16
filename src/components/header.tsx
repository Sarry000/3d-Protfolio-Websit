'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { Button } from './ui/button';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-glow">
          SarthakVerse
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
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
        <Button asChild className="glow-shadow transition-shadow hover:glow-shadow-lg">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
    </header>
  );
}
