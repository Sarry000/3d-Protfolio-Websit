import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { Gallery } from '@/components/sections/gallery';

export default function Home() {
  return (
    <div className="bg-background text-foreground flex flex-col items-center w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <div className="relative z-10 bg-background">
          <div className="light-spot top-[-20%] left-[-10%]" />
          <div className="light-spot top-[20%] right-[-10%]" />
          <About />
          <Projects />
          <Testimonials />
          <Gallery />
          <Contact />
        </div>
      </main>      <Footer />
    </div>
  );
}
