"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

export function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    // Delay showing the spline to ensure the main page content loads first
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 bg-background">
        {showSpline && (
          <iframe
            src='https://my.spline.design/nexbotrobotcharacterconcept-8YIJtt5hQ3zIUjbhvSbNsUwq/'
            frameBorder='0'
            width='100%'
            height='100%'
            className='absolute inset-0 h-full w-full object-cover transition-opacity duration-1000'
            style={{ opacity: isSplineLoaded ? 1 : 0 }}
            onLoad={() => setIsSplineLoaded(true)}
          ></iframe>
        )}
        {!isSplineLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background">
            <Loader className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}
        <div className="absolute inset-0 bg-background/60" />
      </div>
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
            <Button asChild size="lg"
 className="glow-shadow hover:glow-shadow-lg">
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
