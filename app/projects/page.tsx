"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ProjectsPage() {
  const projects = [
    // {
    //   title: "Sorting Visualizer",
    //   category: "DSA Project",
    //   description:
    //     "Interactive visualization of popular sorting algorithms including Quick Sort, Merge Sort, and Bubble Sort built with Java Swing.",
    //   tags: ["Java", "Algorithms", "GUI"],
    //   github: "https://github.com",
    //   demo: "#",
    // },
    {
      title: "Graphic Designing",
      category: "Design",
      description:
        "Complete visual identity and promotional materials for college tech fest, including posters, social media graphics, and banners.",
      tags: ["Photoshop", "Illustrator", "Branding"],
      demo: "https://drive.google.com/drive/folders/1A_eAmES49I6Onmjx2syFcVzQIFhRhVwQ",
    },
    {
      title: "Video Editing",
      category: "Editing",
      description:
        "A visual explainer video that breaks down concepts step by step using AI,clear animations, AI VoiceOver and logical flow.",
      tags: ["Premiere Pro", "After Effects", "Education"],
      demo: "https://drive.google.com/drive/folders/1TDeEmVG0sL2oK3GSElwXAbP8MLDUL64B",
    },
    {
      title: "Vastra",
      category: "Clothing Website",
      description:"VASTRA is a tailor-based project focused on presenting custom stitching and tailoring services through clean and structured design.",
      tags: ["Java", "Graph Theory", "Visualization"],
      github: "https://github.com/KunalSood-19/v0-premium-tailor-website",
      demo: "",
    },
    // {
    //   title: "Brand Identity Design",
    //   category: "Graphic Design",
    //   description:
    //     "Complete brand identity package for a local startup including logo, color palette, typography, and brand guidelines.",
    //   tags: ["Logo Design", "Branding", "Typography"],
    //   demo: "#",
    // },
    // {
    //   title: "College Vlog Series",
    //   category: "Video Editing",
    //   description:
    //     "Documentary-style vlogs capturing student life, featuring dynamic cuts, color grading, and engaging storytelling.",
    //   tags: ["Videography", "Color Grading", "Storytelling"],
    //   demo: "#",
    // },
  ]

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">My Projects</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A collection of my work spanning algorithms, design, and video production. Each project represents a
                learning journey and a passion for creating.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:shadow-accent/20 hover:border-accent/50 hover:-translate-y-1">
                    <CardHeader className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <p className="text-xs font-medium text-accent uppercase tracking-wider">{project.category}</p>
                          <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.demo}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
