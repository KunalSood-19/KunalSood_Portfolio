"use client"

import emailjs from "@emailjs/browser"
import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("WiuSTzt2sMYjoqrvE")
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const templateParams = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const result = await emailjs.send(
        "kunaalsood15@gmail.com",
        "template_bdjbg7d",
        templateParams
      )

      console.log("Email Sent:", result.text)
      alert("Message sent successfully!")
      form.reset()

    } catch (error: any) {
      console.error("EmailJS Error:", error?.text || error)
      alert("Failed to send message.")
    }

    setIsSubmitting(false)
  }

  return (
    <PageBackground>
      <Navbar />

      <main className="min-h-screen pt-16 text-[#0D1B15] dark:text-[#EDEEF2] transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B15] dark:text-[#EDEEF2]">Let's Connect</h1>
              <p className="text-xl text-[#2C4A3E] dark:text-[#9296A0] max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or just want to chat? I'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* Contact Info Cards */}
              <div className="space-y-6">
                
                {/* Email Card */}
                <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm transition-all hover:border-[#35584F] dark:hover:border-[#6C8EEF]/40 hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#88BDA4]/30 dark:bg-[#6C8EEF]/10">
                        <Mail className="h-5 w-5 text-[#35584F] dark:text-[#6C8EEF]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#2C4A3E] dark:text-[#9296A0]">Email</p>
                        <p className="text-sm font-medium text-[#0D1B15] dark:text-white">kunaalsood15@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location Card */}
                <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm transition-all hover:border-[#35584F] dark:hover:border-[#6C8EEF]/40 hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#88BDA4]/30 dark:bg-[#6C8EEF]/10">
                        <MapPin className="h-5 w-5 text-[#35584F] dark:text-[#6C8EEF]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#2C4A3E] dark:text-[#9296A0]">Location</p>
                        <p className="text-sm font-medium text-[#0D1B15] dark:text-white">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Response Card */}
                <Card className="bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm transition-all hover:border-[#35584F] dark:hover:border-[#6C8EEF]/40 hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#88BDA4]/30 dark:bg-[#6C8EEF]/10">
                        <Clock className="h-5 w-5 text-[#35584F] dark:text-[#6C8EEF]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0D1B15] dark:text-white">Quick Response</p>
                        <p className="text-sm font-medium text-[#2C4A3E] dark:text-[#9296A0]">I typically respond within 24 hours.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2 bg-white/70 border border-[#88BDA4] shadow-sm dark:shadow-none dark:bg-[#101218]/80 dark:border-white/[0.07] backdrop-blur-sm">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#0D1B15] dark:text-[#EDEEF2]">Name</label>
                        <Input 
                          name="name" 
                          placeholder="Your name" 
                          required 
                          className="border-[#88BDA4] bg-white/50 text-[#0D1B15] placeholder:text-[#456358] focus-visible:ring-[#35584F] dark:bg-[#1A1D24] dark:border-white/10 dark:text-[#EDEEF2] dark:placeholder:text-[#9296A0] dark:focus-visible:ring-[#6C8EEF]"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#0D1B15] dark:text-[#EDEEF2]">Email</label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="your@email.com" 
                          required 
                          className="border-[#88BDA4] bg-white/50 text-[#0D1B15] placeholder:text-[#456358] focus-visible:ring-[#35584F] dark:bg-[#1A1D24] dark:border-white/10 dark:text-[#EDEEF2] dark:placeholder:text-[#9296A0] dark:focus-visible:ring-[#6C8EEF]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#0D1B15] dark:text-[#EDEEF2]">Subject</label>
                      <Input 
                        name="subject" 
                        placeholder="What's this about?" 
                        required 
                        className="border-[#88BDA4] bg-white/50 text-[#0D1B15] placeholder:text-[#456358] focus-visible:ring-[#35584F] dark:bg-[#1A1D24] dark:border-white/10 dark:text-[#EDEEF2] dark:placeholder:text-[#9296A0] dark:focus-visible:ring-[#6C8EEF]"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#0D1B15] dark:text-[#EDEEF2]">Message</label>
                      <Textarea
                        name="message"
                        rows={6}
                        placeholder="Tell me more about your project..."
                        required
                        className="resize-none border-[#88BDA4] bg-white/50 text-[#0D1B15] placeholder:text-[#456358] focus-visible:ring-[#35584F] dark:bg-[#1A1D24] dark:border-white/10 dark:text-[#EDEEF2] dark:placeholder:text-[#9296A0] dark:focus-visible:ring-[#6C8EEF]"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-[#35584F] text-white hover:bg-[#2C4A3E] dark:bg-[#6C8EEF] dark:text-[#0A0B0F] dark:hover:bg-[#7D9CF2] transition-all" 
                      disabled={isSubmitting}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </PageBackground>
  )
}