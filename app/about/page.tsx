"use client"

import { motion } from "framer-motion"
import { Code2, GraduationCap, Palette, Video, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"

export default function AboutPage() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      description: "Focusing on Data Structures, Algorithms, and Software Development",
    },
  ]

  const interests = [
    {
      icon: Code2,
      title: "Competitive Programming",
      description: "Solving DSA problems in Java, participating in coding contests",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Creating compelling visual narratives and motion graphics",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designing logos, posters, and digital artwork",
    },
    {
      icon: Heart,
      title: "IEEE Graphics Executive",
      description: "Contributing to community events and learning from peers",
    },
  ]

  return (
    <PageBackground>
      <Navbar />

      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-16"
          >
            {/* Header */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-[#0D1B15] dark:text-[#EDEEF2]">
                About Me
              </h1>
              <p className="text-xl text-[#2C4A3E] dark:text-muted-foreground leading-relaxed text-pretty">
                I'm a Computer Science student with a passion for problem-solving and creativity. My journey
                in tech is driven by curiosity and a desire to build things that matter.
              </p>
            </div>

            {/* Story */}
            <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07]">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0D1B15] dark:text-white">
                  <GraduationCap className="h-6 w-6 text-[#35584F] dark:text-accent" />
                  My Journey
                </h2>
                <div className="space-y-4 text-[#2C4A3E] dark:text-muted-foreground leading-relaxed">
                  <p>
                    As a B.Tech CSE student, I've discovered that the intersection of logic and creativity is where I thrive.
                    I view code not just as instructions, but as a powerful medium for solving real-world problems.
                  </p>
                  <p>
                    My fascination with{" "}
                    <span className="text-[#0D1B15] dark:text-foreground font-semibold">Data Structures and Algorithms</span> began when I
                    realized that elegant code isn't just about making things work—it's about making them work
                    beautifully. Java became my language of choice, and I've been sharpening my problem-solving skills
                    ever since.
                  </p>
                  <p>
                    But I'm not just about code. My creative side comes alive through{" "}
                    <span className="text-[#0D1B15] dark:text-foreground font-semibold">video editing</span> and{" "}
                    <span className="text-[#0D1B15] dark:text-foreground font-semibold">graphic design</span>. Whether I'm cutting together
                    a compelling story or designing a striking visual, I love the process of transforming ideas into
                    experiences that resonate with people.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#0D1B15] dark:text-[#EDEEF2]">Education</h2>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07]">
                    <CardContent className="p-6 space-y-2">
                      <h3 className="text-xl font-semibold text-[#0D1B15] dark:text-white">{edu.degree}</h3>
                      <p className="text-[#2C4A3E] dark:text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#0D1B15] dark:text-[#EDEEF2]">What I'm Passionate About</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <motion.div
                      key={interest.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none transition-all hover:border-[#35584F] dark:hover:shadow-lg dark:hover:shadow-accent/20 dark:bg-[#101218]/80 dark:border-white/[0.07] dark:hover:border-accent/50">
                        <CardContent className="p-6 space-y-3">
                          <div className="p-2 rounded-lg bg-[#88BDA4]/30 dark:bg-accent/10 w-fit">
                            <Icon className="h-6 w-6 text-[#35584F] dark:text-accent" />
                          </div>
                          <h3 className="text-lg font-semibold text-[#0D1B15] dark:text-white">{interest.title}</h3>
                          <p className="text-[#2C4A3E] dark:text-muted-foreground text-sm leading-relaxed">{interest.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Skills */}
            <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:bg-gradient-to-br dark:from-accent/10 dark:via-accent/5 dark:to-transparent dark:border-accent/20 dark:shadow-none">
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-semibold flex items-center gap-2 text-[#0D1B15] dark:text-white">
                  <Award className="h-6 w-6 text-[#35584F] dark:text-accent" />
                  Technical Skills
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Java", "DSA", "Problem Solving", "Video Editing", "Graphic Design", "UI/UX"].map((skill) => (
                    <div key={skill} className="px-4 py-2 rounded-lg bg-[#88BDA4]/20 dark:bg-background/50 text-center font-medium text-sm text-[#0D1B15] dark:text-foreground border border-[#88BDA4]/40 dark:border-transparent">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </PageBackground>
  )
}