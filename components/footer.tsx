import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://github.com/KunalSood-19", icon: Github, label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/kunal-sood-66a305332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "/contact", icon: Mail, label: "Email" },
  ]

  return (
    <footer className={`border-t border-[#88BDA4] bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-[#101218]/80 transition-colors duration-300 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-[#1E312A] dark:text-white tracking-wide">
              Kunal<span className="text-[#659287] dark:text-[#6C8EEF]">.</span>
            </h3>
            <p className="text-sm text-[#456358] dark:text-[#9296A0] leading-relaxed font-light">
              B.Tech CSE Student passionate about algorithms, creative design, and building impactful digital experiences.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-[#659287] dark:text-white/40 uppercase tracking-[0.15em]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-[#456358] hover:text-[#1E312A] dark:text-[#9296A0] dark:hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-[#659287] dark:text-white/40 uppercase tracking-[0.15em]">
              Connect With Me
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/80 border border-[#88BDA4] hover:bg-white hover:border-[#659287] text-[#1E312A] dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20 dark:text-[#EDEEF2] transition-all hover:-translate-y-0.5 shadow-xs"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4 text-[#659287] dark:text-[#6C8EEF]" strokeWidth={1.5} />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-[#88BDA4]/60 dark:border-white/10 text-center text-sm text-[#456358] dark:text-[#9296A0] font-light">
          <p>© {new Date().getFullYear()} Kunal. Crafted with passion and code.</p>
        </div>
      </div>
    </footer>
  )
}