"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
            Get in <span className="text-[#00ff41]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg font-urbanist">Ready to start your project? Contact us today!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-poppins font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#00ff41] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-poppins font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#00ff41] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-poppins font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#00ff41] focus:outline-none transition-colors"
                  placeholder="(618) 308-1119"
                />
              </div>

              <div>
                <label className="block text-white font-poppins font-bold mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#00ff41]/30 rounded-lg text-white focus:border-[#00ff41] focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="exterior">Exterior Construction</option>
                  <option value="interior">Interior Renovation</option>
                  <option value="full">Full Detail Service</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-poppins font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1a1f3a] border border-[#00ff41]/30 rounded-lg text-white placeholder-gray-500 focus:border-[#00ff41] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-[#00ff41] text-black font-poppins font-bold rounded-lg hover:bg-[#00cc33] transition-colors relative overflow-hidden"
              >
                {isSubmitted ? (
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block">
                    ✓ Message Sent!
                  </motion.span>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Phone */}
            <motion.a
              href="tel:(618)308-1119"
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-[#1a1f3a] rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-colors"
            >
              <div className="text-3xl">📞</div>
              <div>
                <h3 className="text-white font-poppins font-bold mb-1">Phone</h3>
                <p className="text-[#00ff41] font-urbanist">(618) 308-1119</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@finaltouch.com"
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-[#1a1f3a] rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-colors"
            >
              <div className="text-3xl">✉️</div>
              <div>
                <h3 className="text-white font-poppins font-bold mb-1">Email</h3>
                <p className="text-[#00ff41] font-urbanist">info@finaltouch.com</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-[#1a1f3a] rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-colors"
            >
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-white font-poppins font-bold mb-1">Location</h3>
                <p className="text-gray-400 font-urbanist">Marysville, CA & Surrounding Areas</p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              whileHover={{ x: 10 }}
              className="flex items-start gap-4 p-6 bg-[#1a1f3a] rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41]/50 transition-colors"
            >
              <div className="text-3xl">🕐</div>
              <div>
                <h3 className="text-white font-poppins font-bold mb-1">Hours</h3>
                <p className="text-gray-400 font-urbanist">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-400 font-urbanist">Sat - Sun: 9:00 AM - 4:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
