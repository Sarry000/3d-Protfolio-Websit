"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { galleryImages } from "@/lib/data";
import { useInView } from "@/hooks/use-in-view";
import { Maximize } from "lucide-react";

export function Gallery() {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section id="gallery" ref={ref} className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div data-in-view={inView} className="fade-in-up text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
            Mini Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            A glimpse into my design explorations and visual concepts.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-in-view={inView}
              className="fade-in-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="group relative block h-64 w-full cursor-pointer overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      data-ai-hint={image.hint}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <Maximize className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    data-ai-hint={image.hint}
                    className="h-auto w-full rounded-lg object-contain"
                  />
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
