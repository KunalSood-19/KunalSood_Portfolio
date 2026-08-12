"use client"

import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/animated-background"

export function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* BACKGROUND STACK: Pure site par background color, circles aur grid ko fix rakhega */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {/* Base Background Color: Light mein Sage Green, Dark mein Dark */}
        <div className="absolute inset-0 bg-[#E6F2DD] dark:bg-[#0A0B0F] transition-colors duration-500" />
        
        {/* Animated Circles */}
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>

        {/* Moving Grid Lines for Light & Dark Mode */}
        <motion.div
          className="absolute inset-0 opacity-40 dark:opacity-[0.07] transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
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

      {/* Page Content */}
      <div className="relative z-10 text-[#0D1B15] dark:text-[#EDEEF2] transition-colors duration-300">
        {children}
      </div>
    </>
  )
}