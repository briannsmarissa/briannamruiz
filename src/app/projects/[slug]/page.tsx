import { notFound } from "next/navigation"
import Link from "next/link"
import { projectsData } from "@/data/projects"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, FileText, CheckCircle, ShieldAlert } from "@/components/Icons"

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8 -ml-4 hover:bg-transparent hover:text-primary">
          <Link href="/#projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.frameworks.map(fw => (
              <Badge key={fw} variant="secondary">{fw}</Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Methodology
              </h2>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">{project.methodology}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-destructive" />
                Key Findings & Risk Analysis
              </h2>
              <ul className="space-y-3">
                {project.findings?.map((finding, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 bg-destructive/10 p-1 rounded-full text-destructive shrink-0">
                      <div className="w-2 h-2 rounded-full bg-destructive" />
                    </div>
                    <span className="text-muted-foreground">{finding}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                Recommendations & Outcomes
              </h2>
              <ul className="space-y-3">
                {project.recommendations?.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-lg mb-4">Project Details</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-muted-foreground block mb-1">Tags</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-block bg-muted px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <span className="text-muted-foreground block mb-3">Original Artifact</span>
                  <Button asChild className="w-full">
                    <a href={project.pdfFile} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
