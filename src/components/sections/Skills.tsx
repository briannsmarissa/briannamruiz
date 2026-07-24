"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Professional Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-auto md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {categories.map(([category, skills], index) => (
            <FadeIn key={category} delay={index * 0.1} direction="up" className="min-w-[85vw] sm:min-w-[350px] snap-center md:min-w-0 h-full">
              <div className="bg-background border border-border rounded-xl p-6 h-full shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
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
