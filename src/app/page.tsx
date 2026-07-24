import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Competencies } from "@/components/sections/Competencies"
import { Projects } from "@/components/sections/Projects"
import { ExperienceEducation } from "@/components/sections/ExperienceEducation"
import { Skills } from "@/components/sections/Skills"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Competencies />
      <Projects />
      <ExperienceEducation />
      <Skills />
      <Contact />
    </div>
  )
}
