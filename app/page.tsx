"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code2, Palette, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  const skills = [
    {
      icon: Code2,
      title: "DSA & Java",
      description: "Solving complex algorithmic problems and building efficient data structures",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Creating engaging visual stories through professional video editing",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designing stunning visuals that communicate and captivate",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                Hello, I'm <span className="text-black dark:text-[oklch(55.3%_0.013_58.071)]">Kunal</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty">
                A <span className="text-foreground font-semibold">B.Tech CSE student</span> who transforms algorithms
                into art and ideas into visual experiences. I code with{" "}
                <span className="text-black dark:text-[oklch(55.3%_0.013_58.071)] font-semibold">Java</span>, design
                with passion, and create stories through video.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="transition-all hover:scale-105">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="transition-all hover:scale-105 bg-transparent">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Blending technical expertise with creative vision to build meaningful digital experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div key={skill.title} variants={itemVariants}>
                    <Card className="group h-full transition-all hover:shadow-lg hover:shadow-accent/20 hover:border-accent/50 hover:-translate-y-1">
                      <CardContent className="p-6 space-y-4">
                        <div className="p-3 rounded-lg bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20">
              <CardContent className="p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">Let's Build Something Amazing Together</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                  Whether it's a challenging algorithm, a creative design project, or an engaging video, I'm always
                  excited to collaborate.
                </p>
                <Button asChild size="lg" className="transition-all hover:scale-105">
                  <Link href="/contact">
                    Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  )
}
