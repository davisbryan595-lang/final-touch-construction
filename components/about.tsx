"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
  ]

  return (
    <section id="about" ref={ref} className="py-32 px-4 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-96 rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
              alt="Construction team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/50 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-8">
              We Bring Your Vision to <span className="text-[#00ff41]">Life</span>
            </h2>

            <p className="text-gray-300 text-lg mb-10 font-urbanist leading-relaxed">
              With over 15 years of experience in the construction industry, Final Touch Construction has built a
              reputation for excellence, attention to detail, and customer satisfaction. From residential renovations to
              commercial projects, we deliver quality craftsmanship on every job.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-[#1a1f3a]/50 rounded-lg border border-[#00ff41]/20"
                >
                  <div className="text-3xl font-poppins font-bold text-[#00ff41] mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-[#00ff41] text-black font-poppins font-bold rounded-lg hover:bg-[#00cc33] transition-colors"
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
