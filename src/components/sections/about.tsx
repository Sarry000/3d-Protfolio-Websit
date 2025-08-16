"use client";

import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { Html5, Css3, Javascript, ReactLogo, Spline } from "@/components/icons";

const skills = [
  { name: "HTML", icon: Html5 },
  { name: "CSS", icon: Css3 },
  { name: "JavaScript", icon: Javascript },
  { name: "React", icon: ReactLogo },
  { name: "Spline", icon: Spline },
];

export function About() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div 
            data-in-view={inView}
            className="fade-in-left flex justify-center"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent to-primary rounded-full opacity-50 blur-xl group-hover:opacity-75 transition duration-500"></div>
              <Image
                src="/profile.png"
                alt="Sarthak"
                width={400}
                height={400}
                className="relative rounded-full aspect-square object-cover border-4 border-background transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
          <div 
            data-in-view={inView}
            className="fade-in-right space-y-6 text-center lg:text-left"
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate developer with a knack for creating futuristic and immersive web experiences. With a strong foundation in front-end technologies and a love for 3D design, I strive to build applications that are not only functional but also visually stunning and engaging.
            </p>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-glow">My Skills</h3>
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                {skills.map((skill, index) => (
                   <div
                    key={skill.name}
                    data-in-view={inView}
                    className="fade-in-up flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 transition-all hover:bg-primary/10 hover:glow-shadow"
                    style={{ transitionDelay: `${500 + index * 100}ms` }}
                  >
                    <skill.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
