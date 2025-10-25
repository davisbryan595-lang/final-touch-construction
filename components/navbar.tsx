"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site.config"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  const handleCall = () => {
    window.location.href = `tel:${siteConfig.business.phone}`
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "glass" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection("hero")}
          >
            <Image
              src="https://cdn.builder.io/api/v1/image/assets%2Fbfad6aad64dd4c2cb2466ab07229646d%2F3a30a4ed25ab4402bcd2d6cbfb8dcdca?format=webp&width=400"
              alt="Final Touch Logo"
              width={96}
              height={96}
              className="object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["about", "services", "projects", "pricing", "testimonials"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ color: "#00ff41" }}
                onClick={() => scrollToSection(item)}
                className="text-foreground/70 hover:text-primary transition-colors capitalize"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="px-4 py-2 text-foreground hover:text-primary transition-colors"
            >
              Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
            >
              Get a Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary"
            />
            <motion.div animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-primary" />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-primary"
            />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-4 pb-4">
            {["about", "services", "projects", "pricing", "testimonials"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item)}
                className="text-foreground/70 hover:text-primary transition-colors capitalize text-left"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="px-4 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Call Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold w-full"
            >
              Get a Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
