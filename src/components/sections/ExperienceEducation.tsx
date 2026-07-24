"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { resumeData } from "@/data/resume"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

export function ExperienceEducation() {
  return (
    <section id="experience" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          
          {/* Experience */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Experience</h2>
              </div>
            </FadeIn>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {resumeData.experience.map((exp, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up" className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm relative z-10">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                  </div>
                  
                  {/* Content Card */}
                  <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] border-border bg-surface hover:border-primary/30 transition-colors">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 text-xs font-medium text-primary mb-2">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <p className="text-muted-foreground font-medium text-sm mb-3">{exp.company}</p>
                      <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
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
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Education & Certs</h2>
              </div>
            </FadeIn>

            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <FadeIn key={index} delay={index * 0.1} direction="up">
                  <Card className="border-border bg-surface hover:border-primary/30 transition-colors">
                    <CardContent className="p-5">
                      <h3 className="font-bold text-lg">{edu.degree}</h3>
                      <p className="text-primary font-medium text-sm mb-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {(edu as any).status && (
                          <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                            {(edu as any).status}
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Coursework: </span>
                        {edu.coursework}
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}

              <div className="pt-6">
                <h3 className="text-xl font-bold tracking-tight mb-4">Certifications</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {resumeData.certifications.map((cert, index) => (
                    <FadeIn key={index} delay={index * 0.1} direction="up">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="border-border bg-surface group-hover:border-primary/50 transition-colors h-full">
                          <CardContent className="p-4 flex flex-col h-full justify-between">
                            <div>
                              <h4 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">{cert.name}</h4>
                              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                            </div>
                            <p className="text-[10px] text-muted-foreground mt-3 uppercase tracking-wider font-semibold">
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
