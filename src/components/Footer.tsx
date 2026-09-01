import Link from "next/link"
import { Shield, Mail } from "@/components/Icons"

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
            <span className="font-bold text-xl tracking-tight font-sans">Brianna<span className="text-primary">.GRC</span></span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/brianna-m-ruiz-640497410" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:briannamruiz1421@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </a>

          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground/60 font-light">
          <p>© {new Date().getFullYear()} Brianna Morales Ruiz. All rights reserved.</p>
          <p className="font-medium text-muted-foreground">Cybersecurity Governance, Risk & Compliance</p>
        </div>
      </div>
    </footer>
  )
}
