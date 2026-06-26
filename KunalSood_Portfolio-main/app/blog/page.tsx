"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

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
      // readTime: "4 min read",
      category: "Optimizing Our Profile",
       linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7300045064028758016/",
    },
    {
      title: "The Wall Street",
      excerpt:
        "Excited to share that I have received a Certificate of Participation for attending The Wall Street- Where Capital Meets Innovation, organized by IEEE-CIET Student Branch at Chitkara University, Punjab.",
      date: "2024",
      // readTime: "12 min read",
      category: "Web dev",
       linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7293163562913456130/",
    },
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
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Blog</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
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
                  <Card className="h-full flex flex-col transition-all hover:shadow-lg hover:shadow-accent/20 hover:border-accent/50 hover:-translate-y-1">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="px-2 py-1 rounded-md bg-accent/10 text-accent font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <h2 className="text-2xl font-semibold leading-tight">{post.title}</h2>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </CardContent>

                    <CardFooter>
  <Button asChild variant="ghost" className="group">
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
    </>
  )
}
