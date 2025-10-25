"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site.config"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    address: "",
    preferredDate: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        address: "",
        preferredDate: "",
        message: "",
      })

      // Reset after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

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
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Get Your </span>
            <span className="text-primary">Free Quote</span>
          </h2>
          <p className="text-foreground/80 text-lg">Fill out the form below and we'll contact you within 24 hours</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass rounded-lg p-8 md:p-12"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-3xl text-primary-foreground">✓</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="text-foreground/80">
                We've received your quote request. Our team will contact you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </motion.div>

              {/* Email and Phone */}
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </motion.div>

              {/* Service and Address */}
              <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Service Interested In *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    {siteConfig.services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="123 Main St, Van Nuys, CA"
                  />
                </div>
              </motion.div>

              {/* Preferred Date */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Sending..." : "Get Your Free Quote"}
                </motion.button>
              </motion.div>

              <motion.p variants={itemVariants} className="text-center text-foreground/60 text-sm">
                Or call us directly at{" "}
                <a href={`tel:${siteConfig.business.phone}`} className="text-primary hover:underline font-semibold">
                  {siteConfig.business.phone}
                </a>
              </motion.p>
            </form>
          )}
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mt-12"
        >
          {[
            {
              icon: "📞",
              title: "Call Us",
              value: siteConfig.business.phone,
              action: () => (window.location.href = `tel:${siteConfig.business.phone}`),
            },
            {
              icon: "✉️",
              title: "Email Us",
              value: siteConfig.business.email,
              action: () => (window.location.href = `mailto:${siteConfig.business.email}`),
            },
            {
              icon: "💬",
              title: "WhatsApp",
              value: "Message Us",
              action: () => window.open(siteConfig.social.whatsapp, "_blank"),
            },
          ].map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -5 }}
              onClick={option.action}
              className="glass rounded-lg p-6 text-center hover:border-primary transition-all"
            >
              <div className="text-4xl mb-3">{option.icon}</div>
              <h3 className="font-semibold text-foreground mb-1">{option.title}</h3>
              <p className="text-primary text-sm">{option.value}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
