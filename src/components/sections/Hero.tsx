"use client"

import Image from "next/image"
import { ArrowRight, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/FadeIn"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl opacity-50 transform translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl opacity-50 transform -translate-x-1/3 translate-y-1/4" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          <div className="flex-1 text-center md:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Open to Opportunities
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Cybersecurity <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Governance, Risk & Compliance</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0">
                Specializing in risk management, compliance, security governance, and audit readiness. Helping organizations reduce cyber risk through strategic alignment.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full">
                <a href="/Resume - BMR.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
                <a href="#projects">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2} direction="left" className="flex-1 w-full max-w-md mx-auto">
            <div className="relative aspect-square w-full md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border shadow-2xl bg-surface p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/headshot.png"
                    alt="Brianna Morales Ruiz"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
