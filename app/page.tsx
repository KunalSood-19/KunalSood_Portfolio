"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Code2, Palette, Video, X } from "lucide-react"
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
  const [isResumeOpen, setIsResumeOpen] = useState(false)

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
        <div className="absolute inset-0 bg-[#E6F2DD] dark:bg-[#0A0B0F] transition-colors duration-500" />
        <MovingBackgroundCircle />
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>
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
                  Hello, I'm <span className="text-[#35584F] dark:text-[#6C8EEF]">Kunal.</span>
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

          {/* FOR RECRUITERS SECTION */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm">
                <CardContent className="p-10 md:p-16 text-center space-y-10">
                  
                  {/* Text Header Content */}
                  <div className="space-y-5 max-w-2xl mx-auto">
                    <p className="font-[family-name:var(--font-display)] text-xs font-bold tracking-[0.25em] uppercase text-[#35584F] dark:text-[#9296A0]">
                      For Recruiters
                    </p>
                    <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-balance text-[#0D1B15] dark:text-white leading-tight">
                      Looking for someone who can turn ideas into scalable solutions?
                    </h2>
                    <p className="text-[#2C4A3E] dark:text-[#9296A0] text-base md:text-lg leading-relaxed pt-2">
                      I'm interested in software engineering, full-stack development, and problem-solving roles where I can contribute, learn quickly, and create measurable impact.
                    </p>
                  </div>

                  {/* Buttons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                    <Button
                      asChild
                      size="lg"
                      className="w-full rounded-full bg-[#35584F] text-white hover:bg-[#2C4A3E] dark:bg-[#6C8EEF] dark:text-[#0A0B0F] dark:hover:bg-[#7D9CF2] transition-all h-14 text-base"
                    >
                      {/* Added specific download filename here */}
                      <a href="/Kunalsood-resume.pdf" download="Kunal_Sood_Resume.pdf">
                        Download Resume
                      </a>
                    </Button>
                    <Button
                      onClick={() => setIsResumeOpen(true)}
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-[#88BDA4] text-[#0D1B15] hover:bg-[#88BDA4]/20 dark:border-white/10 dark:text-[#EDEEF2] dark:hover:bg-white/5 bg-transparent h-14 text-base cursor-pointer"
                    >
                      View Resume
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-[#88BDA4] text-[#0D1B15] hover:bg-[#88BDA4]/20 dark:border-white/10 dark:text-[#EDEEF2] dark:hover:bg-white/5 bg-transparent h-14 text-base"
                    >
                      <Link href="/contact">
                        Contact Me
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="w-full rounded-full border-[#88BDA4] text-[#0D1B15] hover:bg-[#88BDA4]/20 dark:border-white/10 dark:text-[#EDEEF2] dark:hover:bg-white/5 bg-transparent h-14 text-base"
                    >
                      <a href="https://www.linkedin.com/in/kunalsood19/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>

      {/* RESUME MODAL OVERLAY */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsResumeOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F9FBF8] dark:bg-[#101218] border border-[#88BDA4] dark:border-white/10 rounded-2xl shadow-2xl p-8 sm:p-12 text-left"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsResumeOpen(false)} 
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-6 h-6 text-[#0D1B15] dark:text-[#EDEEF2]" />
              </button>

              {/* Formatted Resume Content */}
              <div className="space-y-10 font-[family-name:var(--font-body)] text-[#0D1B15] dark:text-[#EDEEF2]">
                
                {/* Header */}
                <div className="text-center border-b border-[#88BDA4]/30 dark:border-white/10 pb-6">
                  <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold tracking-tight mb-2">KUNAL SOOD</h2>
                  <p className="text-sm md:text-base text-[#2C4A3E] dark:text-[#9296A0]">kunaalsood15@gmail.com | +91 9915353386[cite: 1]</p>
                </div>

                {/* Professional Summary */}
                <section>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-[#35584F] dark:text-[#6C8EEF] uppercase tracking-wider text-sm">Professional Summary</h3>
                  <p className="text-[#2C4A3E] dark:text-[#9296A0] leading-relaxed">
                    Computer Science undergraduate with hands-on experience in Full-Stack Web Development and Data Structures & Algorithms[cite: 1]. Proficient in Java, JavaScript, React.js, Node.js, Express.js, SQL, PostgreSQL, and Supabase[cite: 1]. Skilled in developing scalable web applications, designing RESTful APIs, and building responsive user interfaces with a passion for solving real-world problems[cite: 1].
                  </p>
                </section>

                {/* Education */}
                <section>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-[#35584F] dark:text-[#6C8EEF] uppercase tracking-wider text-sm">Education</h3>
                  <div>
                    <div className="flex justify-between font-semibold items-start">
                      <h4>Chitkara University[cite: 1]</h4>
                      <span className="text-right text-sm font-normal text-[#2C4A3E] dark:text-[#9296A0]">August 2024 - Present[cite: 1]</span>
                    </div>
                    <p className="text-[#2C4A3E] dark:text-[#9296A0]">BE Computer Science and Engineering<br/>Rajpura, Punjab, India[cite: 1]</p>
                  </div>
                </section>

                {/* Skills Summary */}
                <section>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-[#35584F] dark:text-[#6C8EEF] uppercase tracking-wider text-sm">Skills Summary</h3>
                  <ul className="space-y-2 text-[#2C4A3E] dark:text-[#9296A0]">
                    <li><strong className="text-[#0D1B15] dark:text-[#EDEEF2]">Programming Languages:</strong> JAVA, SQL[cite: 1]</li>
                    <li><strong className="text-[#0D1B15] dark:text-[#EDEEF2]">Web Technologies:</strong> React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS[cite: 1]</li>
                    <li><strong className="text-[#0D1B15] dark:text-[#EDEEF2]">Databases & Backend:</strong> PostgreSQL, Supabase, Prisma ORM, REST APIs, JWT Authentication[cite: 1]</li>
                    <li><strong className="text-[#0D1B15] dark:text-[#EDEEF2]">Tools & Platforms:</strong> Git, GitHub, VS Code, Postman, Vercel[cite: 1]</li>
                    <li><strong className="text-[#0D1B15] dark:text-[#EDEEF2]">Soft Skills:</strong> Problem Solving, Analytical Thinking, Team Collaboration, Communication, Adaptability[cite: 1]</li>
                  </ul>
                </section>

                {/* Professional Experience */}
                <section>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-[#35584F] dark:text-[#6C8EEF] uppercase tracking-wider text-sm">Professional Experience</h3>
                  <div>
                    <div className="flex justify-between font-semibold items-start">
                      <h4>GRAPHICS EXECUTIVE | IEEE-CIET[cite: 1]</h4>
                      <span className="text-right text-sm font-normal text-[#2C4A3E] dark:text-[#9296A0]">June 2026 - Present[cite: 1]</span>
                    </div>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-[#2C4A3E] dark:text-[#9296A0]">
                      <li>Designed promotional graphics, social media creatives, event banners, and branding materials for technical and professional events[cite: 1].</li>
                      <li>Collaborated with organizing teams to deliver high-quality visual content, ensuring consistent branding and timely execution for multiple campus events[cite: 1].</li>
                    </ul>
                  </div>
                </section>

                {/* Projects */}
                <section>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-[#35584F] dark:text-[#6C8EEF] uppercase tracking-wider text-sm">Projects</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold"><span className="text-[#0D1B15] dark:text-[#EDEEF2]">GrabMyShow</span> <span className="font-normal text-[#2C4A3E] dark:text-[#9296A0]">| JavaScript, HTML5, CSS3, Node.js, Express.js, MongoDB, PostgreSQL, Socket.IO, JWT[cite: 1]</span></h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-[#2C4A3E] dark:text-[#9296A0]">
                        <li>Developed a full-stack movie ticket booking platform featuring movie browsing, theatre management, real-time seat reservation, AI-powered food ordering, and restaurant table booking[cite: 1].</li>
                        <li>Implemented secure JWT authentication, real-time seat synchronization using Socket.IO, scalable REST APIs with Express.js, MongoDB, PostgreSQL, Razorpay payment integration, and backend testing using Jest & Supertest[cite: 1].</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold"><span className="text-[#0D1B15] dark:text-[#EDEEF2]">JobConnect</span> <span className="font-normal text-[#2C4A3E] dark:text-[#9296A0]">| React.js, TypeScript, Node.js, Express.js, PostgreSQL, Prisma, Supabase, Socket.IO[cite: 1]</span></h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-[#2C4A3E] dark:text-[#9296A0]">
                        <li>Developed a full-stack recruitment platform with role-based dashboards for students and recruiters[cite: 1].</li>
                        <li>Implemented job applications, interview scheduling, offer letter generation, and email/real-time notifications[cite: 1]. Built secure REST APIs using Express.js, Prisma, PostgreSQL, JWT authentication, and integrated Supabase for database storage and file management[cite: 1].</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold"><span className="text-[#0D1B15] dark:text-[#EDEEF2]">MeetHub+</span> <span className="font-normal text-[#2C4A3E] dark:text-[#9296A0]">| JavaScript, Node.js, Express.js, Socket.IO, WebRTC, HTML/CSS, AI Integration[cite: 1]</span></h4>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-[#2C4A3E] dark:text-[#9296A0]">
                        <li>Developed MeetHub+, a full-stack video conferencing platform with real-time video/audio calling, screen sharing, live chat, AI-powered meeting summaries, and collaborative tools[cite: 1].</li>
                        <li>Implemented features including waiting room, host controls, whiteboard, polls, attendance tracking, file sharing, and a responsive user interface[cite: 1].</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Certifications */}
                <section>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-3 text-[#35584F] dark:text-[#6C8EEF] uppercase tracking-wider text-sm">Certifications</h3>
                  <ul className="list-disc pl-5 space-y-1 text-[#2C4A3E] dark:text-[#9296A0]">
                    <li>Introduction to Generative AI Studio[cite: 1]</li>
                    <li>Software Development Internship Certificate at SkillCraft[cite: 1]</li>
                    <li>Full Stack Development Internship Certificate at edureka[cite: 1]</li>
                    <li>Get Started with Databricks for Generative AI[cite: 1]</li>
                  </ul>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}