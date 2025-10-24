"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const services = [
    {
      title: "Exterior Construction",
      description: "Professional exterior work including roofing, siding, decks, and landscaping.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
      icon: "🏗️",
    },
    {
      title: "Interior Renovation",
      description: "Complete interior remodeling, flooring, painting, and custom finishes.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&h=500&fit=crop",
      icon: "🏠",
    },
    {
      title: "Full Detail Service",
      description: "Comprehensive renovation combining interior and exterior excellence.",
      image: "https://images.unsplash.com/photo-1504917595217-340a4ee9c6e68?w=500&h=500&fit=crop",
      icon: "✨",
    },
  ]

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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" ref={ref} className="py-32 px-4 bg-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Our <span className="text-[#00ff41]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg font-urbanist">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] rounded-lg overflow-hidden border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-all duration-300"
            >
              {/* Background image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f3a] to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-poppins font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 font-urbanist">{service.description}</p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-[#00ff41] text-black font-poppins font-bold rounded-lg hover:bg-[#00cc33] transition-colors"
                >
                  Book This Service
                </motion.button>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00ff41]/0 via-[#00ff41]/10 to-[#00ff41]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
