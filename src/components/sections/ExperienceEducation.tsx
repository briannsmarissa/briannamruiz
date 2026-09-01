"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { resumeData } from "@/data/resume"
import { Briefcase, GraduationCap, Calendar, Award } from "lucide-react"

export function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          
          {/* Experience */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 text-primary shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
              </div>
            </FadeIn>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
              {resumeData.experience.map((exp, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up" className="relative flex items-start md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-[2.8rem] h-[2.8rem] rounded-full border-4 border-background bg-surface text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10 group-hover:border-primary/30 transition-all duration-300">
                    <div className="w-2.5 h-2.5 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                  </div>
                  
                  {/* Content Card */}
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-4 md:ml-0 glass-card group-hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <h3 className="font-bold text-xl mb-1 text-foreground">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium text-sm mb-4">{exp.company}</p>
                      <ul className="text-sm text-muted-foreground space-y-2 list-none">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="relative pl-4">
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-primary/40 rounded-full" />
                            <span className="font-light leading-relaxed text-muted-foreground/90">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-primary/10 p-3 rounded-xl border border-primary/20 text-primary shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education</h2>
              </div>
            </FadeIn>

            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                  <Card className="glass-card hover:border-primary/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/10 transition-all duration-500" />
                    <CardContent className="p-6 relative z-10">
                      <h3 className="font-bold text-xl mb-1 text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm mb-4">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(edu as any).status && (
                          <span className="inline-flex items-center rounded-md bg-accent/10 border border-accent/20 px-2.5 py-0.5 text-xs font-semibold text-accent">
                            {(edu as any).status}
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-md bg-white/5 border border-white/10 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground/80 font-light leading-relaxed">
                        <span className="font-medium text-muted-foreground">Coursework: </span>
                        {edu.coursework}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}

              <div className="pt-8">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-5 h-5 text-accent" />
                    <h3 className="text-2xl font-bold tracking-tight">Certifications</h3>
                  </div>
                </FadeIn>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {resumeData.certifications.map((cert, index) => (
                    <FadeIn key={index} delay={index * 0.1} direction="up">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none focus:ring-2 focus:ring-primary rounded-xl">
                        <Card className="glass-card group hover:border-primary/50 transition-all duration-300 h-full relative overflow-hidden bg-surface/40 hover:bg-surface/80">
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <CardContent className="p-5 flex flex-col h-full justify-between relative z-10">
                            <div>
                              <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors leading-tight">{cert.name}</h4>
                              <p className="text-xs text-muted-foreground/80 font-medium">{cert.issuer}</p>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-4 font-mono tracking-wider">
                              {cert.date}
                            </p>
                          </CardContent>
                        </Card>
                      </a>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
