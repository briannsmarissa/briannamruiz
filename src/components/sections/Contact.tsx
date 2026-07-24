"use client"

import { FadeIn } from "@/components/animations/FadeIn"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, ExternalLink } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 rounded-t-[100%] scale-[2] origin-bottom -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Currently open to new opportunities in Governance, Risk & Compliance. 
              Let's connect to discuss how I can help strengthen your organization's security posture.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.2} direction="up">
            <Card className="border-border shadow-md bg-surface/80 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                    
                    <a href="mailto:briannamruiz1421@gmail.com" className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">briannamruiz1421@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="https://linkedin.com/in/brianna-m-ruiz-640497410" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </div>
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-sm text-muted-foreground flex items-center group-hover:text-primary transition-colors">
                          View Profile <ExternalLink className="w-3 h-3 ml-1" />
                        </p>
                      </div>
                    </a>
                    
                    <div className="flex items-start gap-4 group">
                      <div className="bg-primary/10 p-3 rounded-full text-primary">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-muted-foreground">Santa Clara, CA</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center items-center p-8 bg-muted/50 rounded-2xl border border-border/50 text-center">
                    <h3 className="font-bold text-xl mb-4">Ready to Review?</h3>
                    <p className="text-sm text-muted-foreground mb-6">
                      Download my full resume for a comprehensive look at my qualifications, projects, and professional background.
                    </p>
                    <Button asChild size="lg" className="w-full rounded-full shadow-md hover:shadow-lg transition-shadow">
                      <a href="/Resume - BMR.pdf" target="_blank" rel="noopener noreferrer">
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
