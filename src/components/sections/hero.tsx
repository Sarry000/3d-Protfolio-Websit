"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0">
        <iframe
          src='https://my.spline.design/nexbotrobotcharacterconcept-8YIJtt5hQ3zIUjbhvSbNsUwq/'
          frameBorder='0'
          width='100%'
          height='100%'
          className='object-cover'
        ></iframe>
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-7xl font-bold text-white md:text-8xl [text-shadow:0_0_20px_hsl(var(--primary))]">
            Sarthak
          </h1>
          <p className="mt-4 text-xl text-foreground/80 md:text-2xl">
            Full Stack Developer & 3D Designer
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg" className="glow-shadow hover:glow-shadow-lg">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glassmorphism glow-shadow hover:glow-shadow-lg hover:bg-primary/10">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="pb-8">
            <div className="scroll-down-mouse"></div>
        </div>
      </div>
    </section>
  );
}
