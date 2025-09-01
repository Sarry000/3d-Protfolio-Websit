
"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function HeroSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-20">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent" />
    </div>
  );
}

export function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Spline 3D Scene */}
      {isClient && (
        <div
          className={cn(
            "absolute inset-0 z-10 transition-opacity duration-1000",
            isSplineLoaded ? 'opacity-100' : 'opacity-0'
          )}
        >
          <iframe
            src='https://my.spline.design/nexbotrobotcharacterconcept-dkmLeloEp6B1FHcSANkbHhrj/'
            frameBorder='0'
            width='100%'
            height='100%'
            onLoad={() => setIsSplineLoaded(true)}
            title="3D Robot Animation"
          ></iframe>
        </div>
      )}

      {/* Loading Spinner Overlay */}
      {!isSplineLoaded && <HeroSpinner />}

      {/* Overlay to darken the scene */}
      <div className="absolute inset-0 z-20 bg-background/60" />

      {/* Foreground Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center">
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
