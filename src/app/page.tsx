import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Testimonials } from '@/components/sections/testimonials';
import { Gallery } from '@/components/sections/gallery';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <div className="light-spot top-[-20%] left-[-10%]" />
      <div className="light-spot top-[20%] right-[-10%]" />
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
