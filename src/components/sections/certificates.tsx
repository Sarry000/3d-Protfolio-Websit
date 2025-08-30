"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { certificates } from "@/lib/data";
import { ExternalLink } from "lucide-react";

export function Certificates() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });

  return (
    <section id="certificates" ref={ref} className="py-24 sm:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div data-in-view={inView} className="fade-in-up text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            My commitment to continuous learning and professional development.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              data-in-view={inView}
              className="fade-in-up flex flex-col overflow-hidden border-primary/20 bg-primary/5 glassmorphism glow-shadow transition-all duration-300 hover:glow-shadow-lg hover:-translate-y-2"
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <CardHeader className="relative h-48 w-full">
                <Image
                  src={cert.imageUrl}
                  alt={cert.title}
                  fill
                  data-ai-hint={cert.aiHint}
                  className="object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-bold text-glow">{cert.title}</CardTitle>
                <p className="mt-2 text-muted-foreground">{cert.issuer} - {cert.date}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full glow-shadow transition-shadow hover:glow-shadow-lg">
                  <Link href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Verify Certificate
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
