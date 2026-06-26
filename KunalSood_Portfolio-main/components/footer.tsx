import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export function Footer() {
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
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Kunal<span className="text-accent">.</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              B.Tech CSE Student passionate about algorithms, creative design, and building impactful digital
              experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Connect With Me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Kunal. Crafted with passion and code.</p>
        </div>
      </div>
    </footer>
  )
}
