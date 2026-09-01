"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { HoverLift } from "@/components/animations/HoverLift"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { resumeData } from "@/data/resume"
import { useRef } from "react"
import { ShieldCheck, Activity, Target, CheckCircle, FileText, Lock, Users, ShieldAlert, BookOpen, AlertTriangle, ChevronLeft, ChevronRight, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

// Map specific icons to competency titles for a richer visual experience
const getIconForCompetency = (title: string) => {
  const iconProps = { className: "w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" }
  if (title.includes("AI")) return <Brain {...iconProps} />
  if (title.includes("Risk")) return <AlertTriangle {...iconProps} />
  if (title.includes("Compliance") || title.includes("SOC") || title.includes("NIST")) return <CheckCircle {...iconProps} />
  if (title.includes("Governance")) return <Target {...iconProps} />
  if (title.includes("Access") || title.includes("Active Directory")) return <Users {...iconProps} />
  if (title.includes("Policies") || title.includes("Documentation")) return <FileText {...iconProps} />
  if (title.includes("Incident")) return <ShieldAlert {...iconProps} />
  if (title.includes("Continuity")) return <Activity {...iconProps} />
  return <ShieldCheck {...iconProps} />
}

export function Competencies() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section id="competencies" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute inset-0 tech-grid opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Core Competencies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg font-light">
              Specialized skills and frameworks essential for driving effective cybersecurity and risk management programs.
            </p>
          </div>
        </FadeIn>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-12 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {resumeData.coreCompetencies.map((comp, index) => (
            <FadeIn key={comp.title} delay={index * 0.05} direction="up" className="min-w-[85vw] sm:min-w-[350px] snap-center md:min-w-0 h-full">
              <HoverLift className="h-full">
                <Card className="h-full glass-card hover:border-primary/40 transition-all duration-300 group overflow-hidden relative bg-surface/30 hover:bg-surface/60">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="pb-3 relative z-10">
                    <div className="mb-4 bg-background/50 border border-white/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {getIconForCompetency(comp.title)}
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{comp.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-sm font-light leading-relaxed text-muted-foreground/90">
                      {comp.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </HoverLift>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full bg-surface/50 border-white/10 shadow-sm h-12 w-12 hover:bg-primary/20 hover:border-primary/30 transition-all" onClick={() => scroll("left")}>
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-surface/50 border-white/10 shadow-sm h-12 w-12 hover:bg-primary/20 hover:border-primary/30 transition-all" onClick={() => scroll("right")}>
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  )
}
