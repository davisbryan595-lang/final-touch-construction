"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Gallery", href: "#gallery" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Exterior Construction", href: "#services" },
        { label: "Interior Renovation", href: "#services" },
        { label: "Full Detail Service", href: "#services" },
        { label: "Consultations", href: "#contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "Phone: (618) 308-1119", href: "tel:(618)308-1119" },
        { label: "Email: info@finaltouch.com", href: "mailto:info@finaltouch.com" },
        { label: "Marysville, CA", href: "#" },
      ],
    },
    {
      title: "Areas Served",
      links: [
        { label: "Marysville", href: "#" },
        { label: "Surrounding Areas", href: "#" },
        { label: "Service Radius: 50 miles", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: "📘", label: "Facebook", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "🐦", label: "Twitter", href: "#" },
    { icon: "💼", label: "LinkedIn", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#1a1f3a] to-[#0a0e27] border-t border-[#00ff41]/20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-poppins font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#00ff41" }}
                      className="text-gray-400 hover:text-[#00ff41] transition-colors font-urbanist text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8 pb-8 border-b border-[#00ff41]/20"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.2, color: "#00ff41" }}
              className="text-2xl text-gray-400 hover:text-[#00ff41] transition-colors"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 font-urbanist text-sm mb-2">
            © {currentYear} Final Touch Construction LLC. All rights reserved.
          </p>
          <p className="text-gray-500 font-urbanist text-xs">Website by The Linkage Digital</p>
        </motion.div>
      </div>
    </footer>
  )
}
