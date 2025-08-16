import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="h-screen w-full">
      <div className="absolute inset-0 z-0">
         <iframe
            src='https://my.spline.design/nexbotrobotcharacterconcept-8YIJtt5hQ3zIUjbhvSbNsUwq/'
            frameBorder='0'
            width='100%'
            height='100%'
            title="Interactive 3D robot character"
          ></iframe>
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
        <a href="https://spline.design" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-gray-700 transition-colors">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1.3335C4.31817 1.3335 1.33333 4.31834 1.33333 8.00016C1.33333 11.682 4.31817 14.6668 8 14.6668C11.6818 14.6668 14.6667 11.682 14.6667 8.00016C14.6667 4.31834 11.6818 1.3335 8 1.3335Z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.5552 11.2464C5.11116 9.87321 5.30906 8.38466 6.0963 7.12061C6.88354 5.85656 8.18844 5.00037 9.61073 4.88019C11.033 4.75999 12.456 5.39958 13.3444 6.57796" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Built with Spline
        </a>
      </div>
    </section>
  );
}
