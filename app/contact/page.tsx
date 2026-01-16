"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = (formData.get("subject") as string) || "Contact Form Submission"
    const message = formData.get("message") as string

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const mailtoLink = `mailto:techbykunal88@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

    // Open email client
    window.open(mailtoLink, "_blank")

    // Reset form
    setTimeout(() => {
      form.reset()
      setIsSubmitting(false)
    }, 500)
  }

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
            className="max-w-4xl mx-auto space-y-12"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Let's Connect</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Have a project in mind or just want to chat? I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <a href="mailto:techbykunal88@gmail.com" className="text-sm hover:text-accent transition-colors">
                          techbykunal88@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p className="text-sm">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20">
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      I typically respond within 24 hours. For urgent inquiries, reach out via email directly.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="lg:col-span-2">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="What's this about?" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me more about your project..."
                        rows={6}
                        required
                        className="resize-none"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Opening Email Client..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
