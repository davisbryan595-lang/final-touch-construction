"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site.config"
import Image from "next/image"

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-primary">Services</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Comprehensive landscaping solutions tailored to meet your unique needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-lg overflow-hidden group cursor-pointer glass-hover flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "https://images.unsplash.com/photo-1585320806997-c33953f03a98?w=500&h=300&fit=crop"}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  quality={85}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed flex-1">{service.description}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-primary mt-4"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
