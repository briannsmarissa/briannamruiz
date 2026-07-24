"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { HoverLift } from "@/components/animations/HoverLift"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { resumeData } from "@/data/resume"
import { useRef } from "react"
import { ShieldCheck, Activity, Target, CheckCircle, FileText, Lock, Users, ShieldAlert, BookOpen, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Map specific icons to competency titles for a richer visual experience
const getIconForCompetency = (title: string) => {
  const iconProps = { className: "w-6 h-6 text-primary" }
  if (title.includes("Risk")) return <AlertTriangle {...iconProps} />
  if (title.includes("Compliance") || title.includes("SOC") || title.includes("NIST")) return <CheckCircle {...iconProps} />
  if (title.includes("Governance")) return <Target {...iconProps} />
  if (title.includes("Access") || title.includes("Active Directory")) return <Users {...iconProps} />
  if (title.includes("Policies")) return <FileText {...iconProps} />
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
    <section id="competencies" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Core Competencies</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Specialized skills and frameworks essential for driving effective cybersecurity and risk management programs.
            </p>
          </div>
        </FadeIn>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {resumeData.coreCompetencies.map((comp, index) => (
            <FadeIn key={comp.title} delay={index * 0.05} direction="up" className="min-w-[85vw] sm:min-w-[350px] snap-center md:min-w-0 h-full">
              <HoverLift className="h-full">
                <Card className="h-full border-border bg-surface hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="mb-4 bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                      {getIconForCompetency(comp.title)}
                    </div>
                    <CardTitle className="text-xl">{comp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {comp.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </HoverLift>
            </FadeIn>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-2 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full bg-surface border-border shadow-sm h-12 w-12" onClick={() => scroll("left")}>
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full bg-surface border-border shadow-sm h-12 w-12" onClick={() => scroll("right")}>
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
    </section>
  )
}
