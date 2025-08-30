"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 bg-background">
      {!isLoaded && (
        <Skeleton className="absolute inset-0" />
      )}
      <iframe
        src="https://prod.spline.design/T50jCj8k-y-tT8nM/scene.splinecode"
        frameBorder="0"
        width="100%"
        height="100%"
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      ></iframe>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      {/* Background elements */}
      <Suspense fallback={<Skeleton className="absolute inset-0" />}>
        <SplineScene />
      </Suspense>
      
      {/* Foreground Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <div className="flex-grow flex flex-col items-center justify-center px-4">
          <h1 className="text-7xl font-bold text-white md:text-8xl [text-shadow:0_0_20px_hsl(var(--primary))]">
            Sarthak
          </h1>
          <p className="mt-4 text-xl font-semibold text-foreground/90 md:text-2xl">
            Computer Engineering Student & Game Developer
          </p>
          <p className="mt-4 max-w-2xl text-base text-foreground/70 md:text-lg">
            Passionate and detail-oriented final-year Computer Engineering student with a strong foundation in programming, game development, and database management. Proficient in Python, JavaScript, and Unity Engine.
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
