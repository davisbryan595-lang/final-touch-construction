"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedCounter } from "./animated-counter"
import { siteConfig } from "@/lib/site.config"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
              alt="Landscaping team at work"
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">About </span>
                <span className="text-primary">Final Touch</span>
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed">
                With over 15 years of experience in professional landscaping, Final Touch has become the trusted choice
                for homeowners and businesses throughout the region. Our commitment to excellence, attention to detail,
                and customer satisfaction sets us apart.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-foreground/80">
                To transform outdoor spaces into beautiful, functional environments that enhance property value and
                quality of life. We believe every landscape tells a story, and we're here to help you write yours.
              </p>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Why Choose Us</h3>
              <div className="space-y-3">
                {[
                  "Expert team with 15+ years of experience",
                  "Personalized service tailored to your needs",
                  "Competitive pricing with transparent quotes",
                  "Fully licensed and insured",
                  "Satisfaction guaranteed on every project",
                ].map((item, index) => (
                  <motion.div key={index} whileHover={{ x: 10 }} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatedCounter label="Years Experience" value={siteConfig.stats.yearsExperience} />
          <AnimatedCounter label="Projects Completed" value={siteConfig.stats.projectsCompleted} />
          <AnimatedCounter label="Satisfied Clients" value={siteConfig.stats.clientsSatisfied} />
          <AnimatedCounter label="Team Members" value={siteConfig.stats.teamMembers} />
        </div>
      </motion.div>
    </section>
  )
}
