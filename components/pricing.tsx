"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Pricing() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const pricingTiers = [
    {
      name: "Basic Detail",
      price: "$99",
      description: "Perfect for small projects",
      features: ["Initial consultation", "Basic repairs", "Standard finishes", "Project timeline: 1-2 weeks"],
      recommended: false,
    },
    {
      name: "Full Detail",
      price: "$149",
      description: "Most popular choice",
      features: [
        "Comprehensive consultation",
        "Complete renovation",
        "Premium finishes",
        "Project timeline: 2-4 weeks",
        "Free design consultation",
      ],
      recommended: true,
    },
    {
      name: "Premium Shine Package",
      price: "$199",
      description: "Ultimate luxury experience",
      features: [
        "Luxury consultation",
        "Full custom renovation",
        "Luxury finishes",
        "Project timeline: 4-8 weeks",
        "Free design + 3D rendering",
        "Warranty included",
      ],
      recommended: false,
    },
  ]

  return (
    <section id="pricing" ref={ref} className="py-20 px-4 bg-[#0a0e27]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Our <span className="text-[#00ff41]">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg font-urbanist">Transparent pricing for all your construction needs</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-lg p-8 transition-all duration-300 ${
                tier.recommended
                  ? "bg-gradient-to-br from-[#00ff41]/20 to-[#1a1f3a] border-2 border-[#00ff41] shadow-lg shadow-[#00ff41]/20"
                  : "bg-gradient-to-br from-[#1a1f3a] to-[#0a0e27] border border-[#00ff41]/20"
              }`}
            >
              {tier.recommended && (
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00ff41] text-black px-4 py-1 rounded-full text-sm font-poppins font-bold"
                >
                  Recommended
                </motion.div>
              )}

              <h3 className="text-2xl font-poppins font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-4 font-urbanist">{tier.description}</p>

              <div className="mb-6">
                <span className="text-5xl font-poppins font-bold text-[#00ff41]">{tier.price}</span>
                <span className="text-gray-400 ml-2">+</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-gray-300 font-urbanist">
                    <span className="text-[#00ff41] mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-poppins font-bold transition-colors ${
                  tier.recommended
                    ? "bg-[#00ff41] text-black hover:bg-[#00cc33]"
                    : "bg-transparent border-2 border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
