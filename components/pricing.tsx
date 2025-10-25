"use client"

import { motion } from "framer-motion"

export default function Pricing() {
  const pricingTiers = [
    {
      id: "maintenance",
      name: "Lawn Maintenance",
      price: "$79",
      frequency: "/month",
      description: "Regular lawn care and upkeep",
      features: [
        "Bi-weekly mowing and edging",
        "Leaf blowing and debris removal",
        "Seasonal treatments",
        "30-minute response time",
        "Free annual lawn health assessment",
        "Flexible scheduling",
      ],
      recommended: false,
      icon: "🌱",
    },
    {
      id: "design",
      name: "Landscape Design",
      price: "$1,200",
      frequency: "- $3,500",
      description: "Complete design & installation",
      features: [
        "Custom landscape design",
        "3D visualization included",
        "Plant selection consultation",
        "Professional installation",
        "Irrigation system setup",
        "1-year plant warranty",
        "Free design revisions",
      ],
      recommended: true,
      icon: "🎨",
    },
    {
      id: "hardscape",
      name: "Hardscaping Services",
      price: "$800",
      frequency: "- $2,500",
      description: "Patios, walkways & more",
      features: [
        "Patio installation",
        "Walkway design & build",
        "Retaining walls",
        "Stone work",
        "Drainage solutions",
        "2-year workmanship warranty",
        "Free site consultation",
      ],
      recommended: false,
      icon: "🏗️",
    },
  ]

  const additionalServices = [
    { name: "Tree & Shrub Care", price: "$150 - $500", icon: "🌳" },
    { name: "Seasonal Cleanup", price: "$300 - $800", icon: "🍂" },
    { name: "Irrigation Setup", price: "$500 - $2,000", icon: "💧" },
    { name: "Mulching", price: "$200 - $600", icon: "🪵" },
    { name: "Snow Removal", price: "Call for quote", icon: "❄️" },
    { name: "Custom Projects", price: "Custom pricing", icon: "✨" },
  ]

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
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Transparent </span>
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-foreground/80 text-lg max-w-2xl mx-auto">
            Competitive rates for professional landscaping services. All quotes include free consultation and site assessment.
          </p>
        </motion.div>

        {/* Main Pricing Tiers */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`glass rounded-lg p-8 relative overflow-hidden transition-all ${
                tier.recommended ? "ring-2 ring-primary md:scale-105" : ""
              }`}
            >
              {tier.recommended && (
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 rounded-full"
                />
              )}

              {tier.recommended && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="text-5xl mb-4">{tier.icon}</div>

              <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
              <p className="text-foreground/70 text-sm mb-6">{tier.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">{tier.price}</span>
                <span className="text-foreground/60 ml-2 text-sm">{tier.frequency}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  tier.recommended
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/50"
                    : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                }`}
              >
                Get Quote
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-lg p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Additional Services</h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {additionalServices.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center p-4">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h4 className="font-semibold text-foreground mb-2">{service.name}</h4>
                <p className="text-primary font-bold text-sm">{service.price}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <div className="glass rounded-lg p-8">
            <h4 className="text-xl font-bold text-foreground mb-4">What's Included</h4>
            <ul className="space-y-3">
              {[
                "Free on-site consultation",
                "Custom quote within 24 hours",
                "Flexible payment options",
                "Licensed and insured team",
                "Satisfaction guarantee",
                "Professional equipment",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80">
                  <span className="text-primary">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-lg p-8">
            <h4 className="text-xl font-bold text-foreground mb-4">Our Promise</h4>
            <ul className="space-y-3">
              {[
                "Transparent, upfront pricing",
                "No hidden fees or surprises",
                "Quality guaranteed work",
                "Fast, professional service",
                "Local, experienced team",
                "Available for emergency services",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80">
                  <span className="text-primary">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to transform your landscape?</h3>
          <p className="text-foreground/70 mb-6">
            Contact us today for a free consultation and custom quote
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Get Your Free Quote Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
