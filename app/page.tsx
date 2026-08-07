"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code2, Palette, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

// 1. Moving Grid Background
const MovingCheckedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* LIGHT MODE GRID (Sage Green #88BDA4) */}
      <motion.div
        className="absolute inset-0 opacity-40 dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, #88BDA4 1px, transparent 1px),
            linear-gradient(to bottom, #88BDA4 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        }}
      />

      {/* DARK MODE GRID (White lines) */}
      <motion.div
        className="absolute inset-0 opacity-0 dark:opacity-[0.07] transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "linear",
        }}
      />
    </div>
  )
}

// 2. Custom Moving Background Circle (Smaller & Slower)
const MovingBackgroundCircle = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <motion.div
        className="w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full blur-2xl 
                   bg-[#5d9b80]/25 dark:bg-[#6C8EEF]/10 
                   transition-colors duration-500"
        animate={{
          x: [-70, 70, -70],
          y: [-50, 50, -50],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default function HomePage() {
  const skills = [
    {
      icon: Code2,
      title: "DSA & Java",
      description: "Solving algorithmic problems and building efficient data structures.",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Creating engaging visual stories through professional editing.",
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Designing clean visuals that communicate with intent.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <>
      {/* BACKGROUND STACK */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        {/* Base Background Color */}
        <div className="absolute inset-0 bg-[#E6F2DD] dark:bg-[#0A0B0F] transition-colors duration-500" />
        
        {/* Moving Dynamic Circle */}
        <MovingBackgroundCircle />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>

        {/* Moving Grid */}
        <MovingCheckedBackground />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main className="min-h-screen pt-16 font-[family-name:var(--font-body)] text-[#0D1B15] dark:text-[#EDEEF2] transition-colors duration-300">
          {/* Hero */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-3xl mx-auto text-center space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className="font-[family-name:var(--font-display)] text-xs tracking-[0.25em] uppercase text-[#35584F] dark:text-[#6C8EEF]"
              >
                Portfolio
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold tracking-tight text-balance text-[#0D1B15] dark:text-[#EDEEF2]">
                  Hello, I'm <span className="text-[#35584F] dark:text-[#6C8EEF]">Kunal</span>
                </h1>
                <p className="text-base md:text-lg text-[#2C4A3E] dark:text-[#9296A0] leading-relaxed text-pretty max-w-xl mx-auto">
                  A B.Tech CSE student who turns algorithms into structure and ideas into visual
                  experiences — coding in Java, designing with intent, and telling stories through video.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center pt-2">
                <Button
                  asChild
                  size="default"
                  className="bg-[#35584F] text-white hover:bg-[#2C4A3E] dark:bg-[#6C8EEF] dark:text-[#0A0B0F] dark:hover:bg-[#7D9CF2] transition-all"
                >
                  <Link href="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="border-[#88BDA4] text-[#0D1B15] hover:bg-[#88BDA4]/20 dark:border-white/15 dark:text-[#EDEEF2] dark:hover:bg-white/5 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </motion.div>
            </motion.div>
          </section>

          {/* What I Do */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={containerVariants}
              className="space-y-10"
            >
              <motion.div variants={itemVariants} className="text-center space-y-2 max-w-lg mx-auto">
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-[#0D1B15] dark:text-[#EDEEF2]">
                  What I Do
                </h2>
                <p className="text-[#2C4A3E] dark:text-[#9296A0] text-sm md:text-base leading-relaxed">
                  Blending technical precision with creative intent.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.div key={skill.title} variants={itemVariants}>
                      <Card className="group h-full bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm transition-all hover:border-[#35584F] dark:hover:border-[#6C8EEF]/40 hover:-translate-y-0.5">
                        <CardContent className="p-5 space-y-3">
                          <div className="p-2.5 rounded-md bg-[#88BDA4]/30 dark:bg-[#6C8EEF]/10 w-fit group-hover:bg-[#88BDA4]/50 dark:group-hover:bg-[#6C8EEF]/15 transition-colors">
                            <Icon className="h-5 w-5 text-[#35584F] dark:text-[#6C8EEF]" />
                          </div>
                          <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-[#0D1B15] dark:text-white">
                            {skill.title}
                          </h3>
                          <p className="text-[#2C4A3E] dark:text-[#9296A0] text-sm leading-relaxed">{skill.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/60 dark:border-white/[0.07] backdrop-blur-sm">
                <CardContent className="p-8 md:p-10 text-center space-y-4">
                  <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold text-balance text-[#0D1B15] dark:text-white">
                    Let's Build Something Together
                  </h2>
                  <p className="text-[#2C4A3E] dark:text-[#9296A0] text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                    A challenging algorithm, a design project, or a story to tell — I'm always up for it.
                  </p>
                  <Button
                    asChild
                    size="default"
                    className="bg-[#35584F] text-white hover:bg-[#2C4A3E] dark:bg-[#6C8EEF] dark:text-[#0A0B0F] dark:hover:bg-[#7D9CF2] transition-all"
                  >
                    <Link href="/contact">
                      Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}