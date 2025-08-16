"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      data-in-view={inView}
      className={cn(
        "grid items-center gap-8 overflow-hidden rounded-lg md:grid-cols-2 md:gap-12",
        isEven ? "fade-in-left" : "fade-in-right"
      )}
    >
      <div className={cn("relative h-80 w-full md:h-full", isEven ? "md:order-last" : "")}>
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          data-ai-hint={project.aiHint}
          className="rounded-lg object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-glow md:text-3xl">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="border-accent/50 bg-accent/10 text-accent">
              {tech}
            </Badge>
          ))}
        </div>
        <Button asChild size="lg" className="group mt-4 glow-shadow transition-shadow hover:glow-shadow-lg">
          <Link href={project.link}>
            View Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto space-y-16 px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            A selection of my work, showcasing my skills in creating modern web experiences.
          </p>
        </div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
