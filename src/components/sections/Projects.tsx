"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { HoverLift } from "@/components/animations/HoverLift"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { ArrowRight, FileText, ChevronLeft, ChevronRight } from "lucide-react"
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
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A collection of enterprise GRC artifacts demonstrating practical experience in risk management, compliance auditing, and security operations.
            </p>
          </div>
        </FadeIn>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projectsData.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1} direction="up" className="min-w-[85vw] sm:min-w-[400px] snap-center md:min-w-0 h-full">
              <HoverLift className="h-full">
                <Card className="h-full border-border bg-background hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
                  <div className="relative h-48 w-full border-b overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-1">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.frameworks.map(fw => (
                        <Badge key={fw} variant="secondary" className="font-normal text-[10px]">
                          {fw}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="line-clamp-3 text-sm">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <Button asChild variant="ghost" className="w-full justify-between group">
                      <Link href={`/projects/${project.slug}`}>
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </HoverLift>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full bg-background border-border shadow-sm h-12 w-12" onClick={() => scroll("left")}>
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-background border-border shadow-sm h-12 w-12" onClick={() => scroll("right")}>
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  )
}
