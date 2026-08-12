"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background" // <-- Imported PageBackground

export default function ProjectsPage() {
  const projects = [
    {
      title: "Vertex – AI Career & Recruitment Platform",
      category: "Full Stack AI SaaS Platform",
      description:
      "An AI-powered career platform where users can build ATS-friendly resumes, get AI resume analysis, practice interviews, discover jobs, and receive personalized career guidance. Recruiters can post jobs, screen candidates, and manage hiring efficiently.",
      tags: [
        "React",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Socket.IO",
        "Gemini AI",
        "Python",
        "spaCy",
        "Scikit-learn"
      ],
      github: "https://github.com/KunalSood-19/Job-Connect-AI",
      demo: "https://job-connect-ai-jobconnect-ai-omega.vercel.app/",
    },
    {
      title: "AI-Powered E-Commerce Analytics Dashboard",
      category: "Full Stack SaaS Project",
      description:
        "Developed a modern analytics platform that enables users to securely upload CSV datasets, generate real-time sales and profit analytics, visualize insights using interactive charts, and manage their own data through JWT authentication. Designed with a professional dashboard UI and scalable backend architecture.",
      tags: [
        "Node.js",
        "Express",
        "MySQL",
        "JWT",
        "Chart.js",
        "Multer",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      github: "https://github.com/KunalSood-19/InsightCart",
      demo: "#",
    },
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
    {
      title: "MeetHub+",
      category: "Full Stack Web Application",
      description:
        "A feature-rich video conferencing platform with real-time video & audio calling, AI-powered meeting summaries, collaborative whiteboard, screen sharing, host controls, live chat, file sharing, polls, attendance tracking, and a fully responsive user experience.",
      tags: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "WebRTC",
        "AI"
      ],
      github: "https://github.com/yourusername/meethub-plus",
      demo: "#",
    },
    {
      title: "GrabMyShow",
      category: "Full Stack Movie Ticket Booking Platform",
      description:
        "A full-stack movie ticket booking platform featuring movie browsing, theatre and show management, real-time seat selection with Socket.IO, secure authentication, online payments, AI-powered cinema food ordering, restaurant table booking, responsive UI, and automated backend unit testing using Jest and Supertest.",
      tags: [
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Socket.IO",
        "Jest",
        "Supertest"
      ],
      github: "https://github.com/KunalSood-19/UrbanHub",
      demo: "#",
    },
    {
      title: "CodeLens AI",
      category: "AI Code Review & Analysis Tool",
      description:
        "A modern AI-powered code review platform that enables developers to write, upload, and analyze source code. It provides code quality scoring, complexity analysis, language detection, loop and line count metrics, intelligent improvement suggestions, interactive visualizations with Chart.js, downloadable reports, and a responsive developer-friendly interface.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express.js",
        "CodeMirror",
        "Chart.js",
        "jsPDF"
      ],
      github: "https://github.com/KunalSood-19/CodeLens",
      demo: "#",
    },
  ]

  return (
    <PageBackground>
      <Navbar />

      <main className="min-h-screen pt-16 text-[#0D1B15] dark:text-[#EDEEF2] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Header */}
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-[#0D1B15] dark:text-[#EDEEF2]">My Projects</h1>
              <p className="text-xl text-[#2C4A3E] dark:text-muted-foreground leading-relaxed">
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
                  <Card className="h-full flex flex-col bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm transition-all hover:border-[#35584F] hover:shadow-md dark:hover:border-[#6C8EEF]/40 hover:-translate-y-1">
                    <CardHeader className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1 flex-1">
                          <p className="text-xs font-medium text-[#35584F] dark:text-accent uppercase tracking-wider">{project.category}</p>
                          <h3 className="text-xl font-semibold leading-tight text-[#0D1B15] dark:text-white">{project.title}</h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-4">
                      <p className="text-[#2C4A3E] dark:text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md font-medium bg-[#88BDA4]/30 text-[#1E312A] border border-[#88BDA4]/40 dark:border-transparent dark:bg-secondary dark:text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex gap-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent border-[#88BDA4] text-[#0D1B15] hover:bg-[#88BDA4]/20 dark:border-white/15 dark:text-[#EDEEF2] dark:hover:bg-white/5 transition-colors">
                          <Link href={project.github} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild size="sm" className="flex-1 bg-[#35584F] text-white hover:bg-[#2C4A3E] dark:bg-[#6C8EEF] dark:text-[#0A0B0F] dark:hover:bg-[#7D9CF2] transition-all">
                          <Link href={project.demo} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </PageBackground>
  )
}