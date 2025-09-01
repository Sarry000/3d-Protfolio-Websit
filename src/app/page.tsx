import { Header } from '@/components/header';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Projects } from '@/components/sections/projects';
import { Certificates } from '@/components/sections/certificates';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';
import { Skills } from '@/components/sections/skills';

export default function Home() {
  return (
    <div className="bg-background text-foreground flex flex-col items-center w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <div className="relative z-10 bg-background">
          <div className="light-spot top-[-20%] left-[-10%]" />
          <div className="light-spot top-[20%] right-[-10%]" />
          <About />
          <Projects />
          <Certificates />
          <Skills />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
