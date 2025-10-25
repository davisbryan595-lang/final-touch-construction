"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site.config"
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Advanced Overlay Effects */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          <source
            src="https://videos.pexels.com/video-files/3571468/3571468-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          <source
            src="https://videos.pexels.com/video-files/3571468/3571468-hd_1280_720_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/80" />

        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/40" style={{
          backgroundImage: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)"
        }} />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-foreground">Transform Your Outdoor</span>
          <br />
          <span className="text-primary">Space Into Paradise</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/80 mb-12 text-balance">
          Professional landscaping services that bring your vision to life. From lawn maintenance to complete landscape
          design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get a Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/10 transition-all"
          >
            See Gallery
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}
