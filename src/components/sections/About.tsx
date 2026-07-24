"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { resumeData } from "@/data/resume"
import { Quote } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <Card className="border-border shadow-sm bg-background/50 backdrop-blur">
              <CardContent className="p-8 md:p-10 relative">
                <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10 rotate-180" />
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground relative z-10 pl-6 md:pl-10">
                  {resumeData.personalInfo.summary}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
