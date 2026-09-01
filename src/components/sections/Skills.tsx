"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume"
import { useRef } from "react"
import { ChevronLeft, ChevronRight, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Skills() {
  const categories = Object.entries(resumeData.skills)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center gap-3">
              <Cpu className="w-8 h-8 text-primary" />
              Technical Core
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          </div>
        </FadeIn>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-auto md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map(([category, skills], index) => (
            <FadeIn key={category} delay={index * 0.1} direction="up" className="min-w-[85vw] sm:min-w-[350px] snap-center md:min-w-0 h-full">
              <div className="glass-card rounded-2xl p-8 h-full group hover:border-primary/40 transition-all duration-500 relative overflow-hidden bg-background/40">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 relative z-10">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] group-hover:scale-150 transition-transform duration-300" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2.5 relative z-10">
                  {skills.map(skill => (
                    <Badge key={skill} variant="outline" className="font-medium bg-surface/50 border-white/10 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-300 py-1.5 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
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
