"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/lib/site.config"

export function Footer() {
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
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                FT
              </div>
              <span className="font-bold text-foreground">Final Touch</span>
            </div>
            <p className="text-foreground/70 text-sm">
              Professional landscaping services for residential and commercial properties.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {["about", "services", "projects", "testimonials"].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-foreground/70 hover:text-primary transition-colors capitalize">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold text-foreground">Services</h3>
            <ul className="space-y-2">
              {siteConfig.services.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <span className="text-foreground/70 text-sm">{service.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-bold text-foreground">Contact</h3>
            <div className="space-y-2 text-sm">
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Phone:</span>
                <br />
                <a href={`tel:${siteConfig.business.phone}`} className="text-primary hover:underline">
                  {siteConfig.business.phone}
                </a>
              </p>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Email:</span>
                <br />
                <a href={`mailto:${siteConfig.business.email}`} className="text-primary hover:underline">
                  {siteConfig.business.email}
                </a>
              </p>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Address:</span>
                <br />
                {siteConfig.business.address}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hours */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass rounded-lg p-6 mb-8"
        >
          <h3 className="font-bold text-foreground mb-4">Operating Hours</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Monday - Friday:</span>
                <br />
                {siteConfig.hours.monday}
              </p>
            </div>
            <div>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Saturday:</span>
                <br />
                {siteConfig.hours.saturday}
              </p>
            </div>
            <div>
              <p className="text-foreground/70">
                <span className="font-semibold text-foreground">Sunday:</span>
                <br />
                {siteConfig.hours.sunday}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {[
            { icon: "f", label: "Facebook", url: siteConfig.social.facebook },
            { icon: "📷", label: "Instagram", url: siteConfig.social.instagram },
            { icon: "💬", label: "WhatsApp", url: siteConfig.social.whatsapp },
          ].map((social, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border pt-8 text-center text-sm text-foreground/60"
        >
          <p>© {new Date().getFullYear()} Final Touch Landscaping. All rights reserved.</p>
          <p className="mt-2">Photos provided by client. Website designed with precision and care.</p>
        </motion.div>
      </div>
    </footer>
  )
}
