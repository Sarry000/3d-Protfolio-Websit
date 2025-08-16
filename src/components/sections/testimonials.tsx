"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section id="testimonials" ref={ref} className="py-24 sm:py-32 bg-primary/5">
      <div
        data-in-view={inView}
        className="fade-in-up container mx-auto px-4 md:px-6"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
            What My Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Hear from those who've experienced my work firsthand.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto mt-12 w-full max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="glassmorphism h-full transform-gpu transition-all duration-300 hover:glow-shadow-lg hover:-translate-y-2">
                    <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        data-ai-hint={testimonial.aiHint}
                        className="rounded-full border-2 border-accent"
                      />
                      <blockquote className="text-lg font-semibold leading-snug">
                        "{testimonial.review}"
                      </blockquote>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground glow-shadow transition-shadow hover:glow-shadow-lg" />
          <CarouselNext className="text-foreground glow-shadow transition-shadow hover:glow-shadow-lg" />
        </Carousel>
      </div>
    </section>
  );
}
