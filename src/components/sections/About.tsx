"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { resumeData } from "@/data/resume"
import { ShieldAlert } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative subtle lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Professional Profile</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <Card className="glass-card relative border-0 rounded-xl overflow-hidden bg-surface/80">
                <CardContent className="p-8 md:p-12 relative">
                  <ShieldAlert className="absolute top-8 left-8 w-24 h-24 text-primary/5 -rotate-12" />
                  <p className="text-lg md:text-xl leading-[1.8] text-muted-foreground relative z-10 font-light text-justify md:text-left">
                    {resumeData.personalInfo.summary}
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
