"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background" // <-- Imported PageBackground

export default function BlogPage() {
  const posts = [
    {
      title: "Appointed as Executive Member (Graphics Team) IEEE CIET Student Branch | Chitkara University",
      date: "",
      category: "IEEE-Graphic Designing",
      linkedinUrl:"https://www.linkedin.com/feed/update/urn:li:activity:7392896391712231424/",
    },
    {
      title: "An Unforgettable Experience with Apple at Super Charge25 ",
      excerpt:"The session kicked off with insightful talks from Apple experts, where we explored how Mac, iPads, and the Apple development ecosystem enable us to create powerful applications. We got hands-on insights into Swift, SwiftUI, Xcode, and how Apple seamless design philosophy enhances the user experience.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Apple Event",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7299116002187853824/",
    },
    {
      title: "Web Crafters Event",
      excerpt:
        "I recently had the opportunity to participate in WebCrafters 2.0: Skill Development in Collaborative Coding, organized by the GeeksforGeeks Student Chapter in collaboration with the Department of Computer Science and Engineering, Chitkara University, Punjab.",
      date: "2024-01-05",
      category: "Web Development",
      linkedinUrl: "https://www.linkedin.com/in/kunalsood19/recent-activity/all/",
    },
    {
      title: "SkillCraft Internship-Web Development",
      excerpt:
        "Thrilled to share that I have successfully completed a 1-month internship in Software Development at SkillCraft Technology!",
      date: "2025-08-1",
      readTime: "10 min read",
      category: "Internship",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7369396247738105856/",
    },
    {
      title: "OSC Event",
      excerpt: " I had the opportunity to learn from industry experts about optimizing our LinkedIn profiles, enhancing our Twitter presence, and effectively managing our GitHub repositories.",
      date: "2025",
      category: "Optimizing Our Profile",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7300045064028758016/",
    },
    {
      title: "The Wall Street",
      excerpt:
        "Excited to share that I have received a Certificate of Participation for attending The Wall Street- Where Capital Meets Innovation, organized by IEEE-CIET Student Branch at Chitkara University, Punjab.",
      date: "2024",
      category: "Web dev",
      linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7293163562913456130/",
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
              <h1 className="text-4xl md:text-5xl font-bold text-balance text-[#0D1B15] dark:text-[#EDEEF2]">Blog</h1>
              <p className="text-xl text-[#2C4A3E] dark:text-muted-foreground leading-relaxed">
                Thoughts on algorithms, design, and the creative process. Sharing what I learn along the way.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Updated Card Styling */}
                  <Card className="h-full flex flex-col bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm transition-all hover:border-[#35584F] hover:shadow-md dark:hover:border-[#6C8EEF]/40 hover:-translate-y-1">
                    <CardHeader className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        {/* Category Badge */}
                        <span className="px-2 py-1 rounded-md bg-[#88BDA4]/30 text-[#35584F] dark:bg-accent/10 dark:text-accent font-medium">
                          {post.category}
                        </span>
                        
                        {post.date && (
                          <div className="flex items-center gap-1 text-[#456358] dark:text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        )}
                        
                        {post.readTime && (
                          <div className="flex items-center gap-1 text-[#456358] dark:text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        )}
                      </div>
                      <h2 className="text-2xl font-semibold leading-tight text-[#0D1B15] dark:text-white">{post.title}</h2>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <p className="text-[#2C4A3E] dark:text-muted-foreground leading-relaxed line-clamp-4">{post.excerpt}</p>
                    </CardContent>

                    <CardFooter>
                      {/* Button Styling */}
                      <Button asChild variant="ghost" className="group text-[#35584F] hover:text-[#0D1B15] hover:bg-[#88BDA4]/20 dark:text-muted-foreground dark:hover:text-white dark:hover:bg-white/5 transition-colors">
                        <a
                          href={post.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View on LinkedIn
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
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
    </PageBackground>
  )
}