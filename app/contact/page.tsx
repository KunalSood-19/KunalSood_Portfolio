"use client"

import emailjs from "@emailjs/browser"
import type React from "react"
import { useState, useEffect } from "react"
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
              <h1 className="text-4xl md:text-5xl font-bold">Let's Connect</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or just want to chat? I'd love to hear from you.
              </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


              {/* Contact Info */}

              <div className="space-y-6">

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">

                      <div className="p-2 rounded-lg bg-accent/10">
                        <Mail className="h-5 w-5 text-accent" />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p className="text-sm">kunaalsood15@gmail.com</p>
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

                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p className="text-sm">India</p>
                      </div>

                    </div>
                  </CardContent>
                </Card>


                <Card className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border-accent/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">Quick Response</h3>
                    <p className="text-sm text-muted-foreground">
                      I typically respond within 24 hours.
                    </p>
                  </CardContent>
                </Card>

              </div>


              {/* Contact Form */}

              <Card className="lg:col-span-2">

                <CardContent className="p-8">

                  <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input name="name" placeholder="Your name" required />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input name="email" type="email" placeholder="your@email.com" required />
                      </div>

                    </div>


                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input name="subject" placeholder="What's this about?" required />
                    </div>


                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        name="message"
                        rows={6}
                        placeholder="Tell me more about your project..."
                        required
                        className="resize-none"
                      />
                    </div>


                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
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

    </>
  )
}