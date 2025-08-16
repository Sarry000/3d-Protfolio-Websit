"use client";

import { useInView } from "@/hooks/use-in-view";
import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillCard = ({ title, skills, inView, delay }: { title: string, skills: { name: string, level: number }[], inView: boolean, delay: number }) => (
  <Card 
    data-in-view={inView}
    className="fade-in-up w-full border-primary/20 bg-primary/5 glassmorphism glow-shadow"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <CardHeader>
      <CardTitle className="text-xl font-bold text-glow">{title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {skills.map((skill, index) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-foreground">{skill.name}</span>
            <span className="text-sm font-medium text-primary">{skill.level}%</span>
          </div>
          <Progress value={inView ? skill.level : 0} className="h-2 transition-all duration-1000" style={{ transitionDelay: `${delay + index * 100}ms` }} />
        </div>
      ))}
    </CardContent>
  </Card>
);

export function Skills() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div data-in-view={inView} className="fade-in-up text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technical <span className="text-glow text-primary">Skills</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard title="Programming Languages" skills={skillsData.programmingLanguages} inView={inView} delay={200} />
          <SkillCard title="Technologies & Frameworks" skills={skillsData.technologiesFrameworks} inView={inView} delay={400} />
          <SkillCard title="Tools & Others" skills={skillsData.toolsOthers} inView={inView} delay={600} />
        </div>

        <div className="mt-16">
          <div data-in-view={inView} className="fade-in-up text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tighter text-glow">Additional Technologies</h3>
          </div>
          <div data-in-view={inView} className="fade-in-up flex flex-wrap justify-center gap-3">
            {skillsData.additionalTechnologies.map((tech, index) => (
              <Badge
                key={tech}
                variant="secondary"
                data-in-view={inView}
                className="fade-in-up border-accent/50 bg-accent/10 text-accent text-sm px-4 py-2"
                style={{ transitionDelay: `${800 + index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
