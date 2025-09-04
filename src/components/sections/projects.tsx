
"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useState } from "react";

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid items-center gap-8 overflow-hidden md:grid-cols-2 md:gap-12"
    >
      <div 
        data-in-view={inView}
        className={cn(
          "relative h-80 w-full md:h-full", 
          isEven ? "md:order-last fade-in-left" : "fade-in-right"
        )}
        style={{ transitionDelay: '100ms' }}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          data-ai-hint={project.aiHint}
          className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      </div>
      <div 
        data-in-view={inView}
        className={cn("space-y-4", isEven ? "fade-in-right" : "fade-in-left")}
        style={{ transitionDelay: '300ms' }}
      >
        <h3 className="text-2xl font-bold text-glow md:text-3xl">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="border-accent/50 bg-accent/10 text-accent">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.links.map((link) => (
            <Button key={link.href} asChild size="lg" className="group mt-4 glow-shadow transition-shadow hover:glow-shadow-lg">
              <Link href={link.href} target="_blank">
                <link.icon className="mr-2 h-4 w-4" />
                {link.name}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32">
      <div className="container mx-auto space-y-16 px-4 md:px-6">
        <div data-in-view={inView} className="fade-in-up text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            A selection of my work, showcasing my skills in creating modern web experiences.
          </p>
        </div>
        <div className="space-y-24">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="mt-12 flex justify-center gap-4">
          {visibleProjects < projects.length && (
            <Button onClick={showMoreProjects} size="lg" className="glow-shadow hover:glow-shadow-lg">
              Show More
            </Button>
          )}
          {visibleProjects > 3 && (
            <Button onClick={showLessProjects} size="lg" variant="outline" className="glassmorphism glow-shadow hover:glow-shadow-lg hover:bg-primary/10">
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
