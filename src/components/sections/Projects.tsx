"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { HoverLift } from "@/components/animations/HoverLift"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Activity } from "lucide-react"
import { projectsData } from "@/data/projects"

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-24 bg-surface relative">
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center gap-3">
              <Activity className="w-8 h-8 text-primary" />
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              A collection of enterprise GRC artifacts demonstrating practical experience in risk management, compliance auditing, and security operations.
            </p>
          </div>
        </FadeIn>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-12 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projectsData.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up" className="min-w-[85vw] sm:min-w-[400px] snap-center md:min-w-0 h-full">
              <HoverLift className="h-full">
                <Card className="h-full glass-card hover:border-primary/30 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col overflow-hidden group">
                  <div className="relative h-48 w-full border-b border-white/5 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay duration-500" />
                  </div>
                  
                  <CardHeader className="pt-6">
                    <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.frameworks.map(fw => (
                        <Badge key={fw} variant="outline" className="font-mono text-[10px] bg-background/50 border-white/10 text-muted-foreground">
                          {fw}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3 text-sm font-light leading-relaxed text-muted-foreground/90">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="pt-4 pb-6">
                    <Button asChild variant="ghost" className="w-full justify-between group/btn hover:bg-primary/10 hover:text-primary transition-all">
                      <Link href={`/projects/${project.slug}`}>
                        <span className="font-medium">View Case Study</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:text-primary transition-all" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverLift>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full bg-surface border-white/10 shadow-sm h-12 w-12 hover:bg-primary/20 hover:border-primary/30 transition-all" onClick={() => scroll("left")}>
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-surface border-white/10 shadow-sm h-12 w-12 hover:bg-primary/20 hover:border-primary/30 transition-all" onClick={() => scroll("right")}>
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  )
}
