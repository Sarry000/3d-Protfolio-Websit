"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const socialLinks = [
  { icon: Github, href: "https://github.com/Sarry000", name: "GitHub" },
  { icon: Linkedin, href: "#", name: "LinkedIn" },
  { icon: Twitter, href: "#", name: "Twitter" },
];

export function Contact() {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    console.log(values);
    toast({
      variant: 'default',
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div data-in-view={inView} className="fade-in-up text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-glow sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <div data-in-view={inView} className="fade-in-left lg:col-span-2" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-2xl font-bold text-glow">Connect With Me</h3>
            <p className="mt-2 text-muted-foreground">
              Find me on social media or send me a message directly.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button key={index} asChild variant="outline" size="icon" className="h-12 w-12 rounded-full glassmorphism glow-shadow transition-all hover:glow-shadow-lg hover:border-accent hover:text-accent">
                  <Link href={social.href} target="_blank" aria-label={social.name}>
                    <social.icon className="h-6 w-6" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div data-in-view={inView} className="fade-in-right lg:col-span-3" style={{ transitionDelay: '400ms' }}>
            <div className="rounded-xl border border-primary/20 p-6 md:p-8 glassmorphism glow-shadow">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary">Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." {...field} className="min-h-[120px]"/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting} size="lg" className={cn("w-full glow-shadow transition-all hover:glow-shadow-lg", isSubmitting && "animate-pulse")}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
