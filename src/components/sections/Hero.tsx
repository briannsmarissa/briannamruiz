"use client"

import Image from "next/image"
import { ArrowRight, FileText, Shield, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/FadeIn"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Premium Tech Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] transform translate-x-1/3 -translate-y-1/4" 
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/4" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <ShieldCheck className="w-4 h-4" />
                <span>Open to Opportunities</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground leading-[1.1]">
                Cybersecurity <br className="hidden md:block" />
                <span className="text-gradient">Governance, Risk & Compliance</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light">
                Specializing in risk management, compliance, security governance, and audit readiness. Helping organizations reduce cyber risk through strategic alignment.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                <a href="/Resume - BMR.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-xl border-border bg-surface/50 hover:bg-surface backdrop-blur-sm transition-all group">
                <a href="#projects">
                  View Portfolio
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2} direction="left" className="flex-1 w-full max-w-md mx-auto">
            <div className="relative aspect-square w-full md:w-[420px] md:h-[420px] mx-auto">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-primary/20 border-dashed"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] rounded-full border border-accent/20 border-dashed"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl bg-surface/40 backdrop-blur-md p-3">
                <div className="relative w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <Image
                    src="/headshot.png"
                    alt="Brianna Morales Ruiz"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                </div>
              </div>
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-surface/80 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="bg-primary/20 p-2 rounded-lg text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-xs font-semibold pr-2">
                  <div className="text-muted-foreground">Certified</div>
                  <div className="text-foreground">CompTIA Security+</div>
                </div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
